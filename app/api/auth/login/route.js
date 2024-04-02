import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const POST = async (NextRequest) => {
	try {
		const body = await NextRequest.json();
		const { email, password } = body;

		if (!email || !password) {
			return new Response('Username and Password is required', {
				status: 401,
			});
		}

		const data = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
			{
				email,
				password,
			}
		);
		console.log(data.data);

		const tokenData = {
			data: data.data.user,
		};
		console.log(tokenData);
		const token = jwt.sign(tokenData, process.env.NEXT_PUBLIC_JWT_SECRET, {
			expiresIn: '10d',
		});
		console.log(token);
		const response = NextResponse.json({
			message: 'Login successfull',
			user: data.data.user,
			token,
		});

		response.cookies.set('hmstoken', token, { httpOnly: true });
		return response;
	} catch (error) {
		console.log('Error', error.message);
		return new Response('Something went wrong ', { status: 500 });
	}
};
