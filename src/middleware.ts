import type { MiddlewareHandler } from 'astro';

const SUPPORTED_LOCALES = ['en', 'id'] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

const DEFAULT_LOCALE: Locale = 'en';
const LOCALE_COOKIE_NAME = 'gilabs_locale';
const BOT_USER_AGENT_PATTERN = /(bot|crawler|spider|slurp|facebookexternalhit|twitterbot|bingpreview|linkedinbot|discordbot|whatsapp|telegrambot|pinterest|yandex|baiduspider|duckduckbot|semrush|ahrefs|mj12bot)/i;
const LOCALE_PATH_PATTERN = /^\/(en|id)(?:\/|$)/;
const VARY_VALUE = 'Accept-Language, Cookie, CF-IPCountry, X-Vercel-IP-Country';

function parseLocalePath(pathname: string): Locale | null {
	const match = pathname.match(LOCALE_PATH_PATTERN);
	return match && SUPPORTED_LOCALES.includes(match[1] as Locale) ? (match[1] as Locale) : null;
}

function parseLocaleCookie(cookieValue: string | undefined): Locale | null {
	if (!cookieValue) {
		return null;
	}

	const localeMatch = cookieValue.match(new RegExp(`${LOCALE_COOKIE_NAME}=([^;]+)`));
	if (!localeMatch) {
		return null;
	}

	const locale = localeMatch[1] as Locale;
	return SUPPORTED_LOCALES.includes(locale) ? locale : null;
}

function detectLocaleFromRequest(context: Parameters<MiddlewareHandler>[0]): Locale {
	const country = (
		context.request.headers.get('x-vercel-ip-country') ??
		context.request.headers.get('cf-ipcountry') ??
		''
	).trim().toUpperCase();

	if (country === 'ID') {
		return 'id';
	}

	const acceptLanguage = context.request.headers.get('accept-language') ?? '';
	const languages = acceptLanguage
		.split(',')
		.map((value) => value.split(';')[0].trim().toLowerCase())
		.filter(Boolean);

	if (languages.some((language) => language === 'id' || language.startsWith('id-'))) {
		return 'id';
	}

	return DEFAULT_LOCALE;
}

function isBotRequest(context: Parameters<MiddlewareHandler>[0]): boolean {
	const userAgent = context.request.headers.get('user-agent') ?? '';
	return BOT_USER_AGENT_PATTERN.test(userAgent);
}

function setLocaleCookie(headers: Headers, locale: Locale, isSecure = true): void {
	headers.append(
		'Set-Cookie',
		`${LOCALE_COOKIE_NAME}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${isSecure ? '; Secure' : ''}`
	);
}

function applyBaselineHeaders(headers: Headers): void {
	headers.set('X-Content-Type-Options', 'nosniff');
	headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	headers.set('X-Frame-Options', 'DENY');
	headers.set('Cross-Origin-Opener-Policy', 'same-origin');
	headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
	headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

	if (!headers.has('Content-Security-Policy')) {
		headers.set(
			'Content-Security-Policy',
			"default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https:; connect-src 'self' https:; form-action 'self'"
		);
	}
}

function applyCommonResponseHeaders(response: Response, pathname: string): Response {
	const robotsTag = pathname === '/404' || pathname.endsWith('/404') ? 'noindex, nofollow' : 'index, follow';
	const existingHeader = response.headers.get('X-Robots-Tag');

	const newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers,
	});

	if (!existingHeader || existingHeader !== robotsTag) {
		newResponse.headers.set('X-Robots-Tag', robotsTag);
	}

	applyBaselineHeaders(newResponse.headers);

	if (pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot|css|js)$/i)) {
		newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	} else if (pathname.match(/\.(html|htm)$/i)) {
		newResponse.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
	}

	return newResponse;
}

export const onRequest: MiddlewareHandler = async (context, next) => {
	const pathname = context.url.pathname;
	const localeFromPath = parseLocalePath(pathname);
	const localeFromCookie = parseLocaleCookie(context.request.headers.get('cookie') ?? undefined);
	const isBot = isBotRequest(context);
	const preferredLocale = localeFromPath ?? localeFromCookie ?? detectLocaleFromRequest(context);
	const isSecureRequest = context.url.protocol === 'https:';

	if (pathname === '/' && !isBot && preferredLocale === 'id') {
		const redirectHeaders = new Headers({
			Location: '/id',
			'Cache-Control': 'private, no-store',
			'X-Robots-Tag': 'noindex, nofollow',
			'Vary': VARY_VALUE,
		});

		setLocaleCookie(redirectHeaders, 'id', isSecureRequest);
		applyBaselineHeaders(redirectHeaders);

		return new Response(null, {
			status: 302,
			headers: redirectHeaders,
		});
	}

	const response = await next();
	const newResponse = applyCommonResponseHeaders(response, pathname);

	if (!isBot && (localeFromPath || pathname === '/')) {
		setLocaleCookie(newResponse.headers, localeFromPath ?? preferredLocale, isSecureRequest);
	}

	if (pathname === '/' || localeFromPath) {
		newResponse.headers.set('Vary', VARY_VALUE);
	}

	return newResponse;
};
