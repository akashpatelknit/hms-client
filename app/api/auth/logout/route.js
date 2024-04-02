import { NextResponse } from "next/server";

export const POST = async (NextRequest) => {
	try {
		// Clear the token from the user's cookies or local storage
		const response = NextResponse.json({
			message: 'Logout successful',
		});

		// Clear the token cookie by setting an empty token with an expired date
		response.cookies.set('hmstoken', '', {
			expires: new Date(0),
			httpOnly: true,
		});

		return response;
	} catch (error) {
		console.log('Error', error.message);
		return new Response('Something went wrong ', { status: 500 });
	}
};
