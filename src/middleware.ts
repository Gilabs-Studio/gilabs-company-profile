import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	const pathname = context.url.pathname;

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

	// Baseline security headers for browser best-practices audits.
	newResponse.headers.set('X-Content-Type-Options', 'nosniff');
	newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	newResponse.headers.set('X-Frame-Options', 'DENY');
	newResponse.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
	newResponse.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
	newResponse.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

	if (!newResponse.headers.has('Content-Security-Policy')) {
		newResponse.headers.set(
			'Content-Security-Policy',
			"default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https:; connect-src 'self' https:; form-action 'self'"
		);
	}
	
	// Add cache headers for static assets
	if (pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot|css|js)$/i)) {
		// Cache static assets for 1 year
		newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	} else if (pathname.match(/\.(html|htm)$/i)) {
		// Cache HTML for shorter period
		newResponse.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
	}
	
	return newResponse;
};
