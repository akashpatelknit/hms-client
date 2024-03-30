import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
	const path = request.nextUrl.pathname;
	// console.log('path', path);
	const isPublicPath = path === '/login' || path === '/register';
	const token = request.cookies.get('token')?.value || '';

	if (isPublicPath && token) {
		return NextResponse.redirect(new URL(`${path}`, request.nextUrl));
	}

	if (!isPublicPath && !token) {
		return NextResponse.redirect(new URL('/login', request.nextUrl));
	}
}

export const config = {
	matcher: ['/', '/login', '/register', '/profile/:id'],
};
