import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	const pathname = context.url.pathname;

	// ============================================================
	// GEO-BASED LOCALE REDIRECT
	// Only redirect from root "/" — never redirect locale pages
	// ============================================================
	if (pathname === '/' || pathname === '') {
		// Detect country from hosting provider headers
		// Vercel sets X-Vercel-IP-Country, Cloudflare sets CF-IPCountry
		const country =
			context.request.headers.get('X-Vercel-IP-Country') ||
			context.request.headers.get('CF-IPCountry') ||
			context.request.headers.get('X-Country-Code') ||
			'';

		// Also check Accept-Language as fallback
		const acceptLanguage = context.request.headers.get('Accept-Language') || '';
		const prefersIndonesian =
			acceptLanguage.toLowerCase().startsWith('id') ||
			acceptLanguage.toLowerCase().includes('id-id');

		const isIndonesia = country.toUpperCase() === 'ID';

		if (isIndonesia || prefersIndonesian) {
			// Redirect Indonesian users to /id
			return context.redirect('/id', 302);
		} else {
			// Default: redirect everyone else to /en
			return context.redirect('/en', 302);
		}
	}

	// Get the response from next middleware/handler
	const response = await next();
	
	// Determine robots tag value
	const robotsTag = (pathname === '/404' || pathname.endsWith('/404')) 
		? 'noindex, nofollow' 
		: 'index, follow';
	
	// Clone response and add headers
	const existingHeader = response.headers.get('X-Robots-Tag');
	
	const newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers,
	});
	
	// Set X-Robots-Tag
	if (!existingHeader) {
		newResponse.headers.set('X-Robots-Tag', robotsTag);
	} else if (existingHeader !== robotsTag) {
		newResponse.headers.set('X-Robots-Tag', robotsTag);
	}
	
	// Add cache headers for static assets
	if (pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot|css|js)$/i)) {
		// Cache static assets for 1 year
		newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	} else if (pathname.match(/\.(html|htm)$/i)) {
		// Cache HTML for shorter period
		newResponse.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
	}
	
	// Enable compression
	if (!newResponse.headers.get('Content-Encoding')) {
		newResponse.headers.set('Accept-Encoding', 'gzip, deflate, br');
	}
	
	return newResponse;
};
