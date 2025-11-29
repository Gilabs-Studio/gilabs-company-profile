import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
	// Get the response from next middleware/handler
	const response = await next();
	
	// Set X-Robots-Tag header
	// Default to 'index, follow' unless it's a 404 page or other special pages
	const pathname = context.url.pathname;
	
	// Determine robots tag value
	const robotsTag = (pathname === '/404' || pathname.endsWith('/404')) 
		? 'noindex, nofollow' 
		: 'index, follow';
	
	// Clone response and add header
	const newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers,
	});
	
	newResponse.headers.set('X-Robots-Tag', robotsTag);
	
	return newResponse;
};

