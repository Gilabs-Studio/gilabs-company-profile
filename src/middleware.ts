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
	// Check if header already exists to avoid duplication
	const existingHeader = response.headers.get('X-Robots-Tag');
	
	const newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers,
	});
	
	// Only set if not already set to avoid duplication
	if (!existingHeader) {
		newResponse.headers.set('X-Robots-Tag', robotsTag);
	} else if (existingHeader !== robotsTag) {
		// Replace if different value
		newResponse.headers.set('X-Robots-Tag', robotsTag);
	}
	
	return newResponse;
};

