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

		const data = await axios.post('http://localhost:3001/api/auth/login', {
			email,
			password,
		});
		console.log(data.data);

		const tokenData = {
			username: data.data.user.userName,
			id: data.data.user.id,
		};
		console.log(tokenData);
		const token = jwt.sign(tokenData, '3543fdfere5435rer4', {
			expiresIn: '1d',
		});
		console.log(token);
		const response = NextResponse.json({
			message: 'Login successfull',
			user: data.data.user,
			token,
		});

		response.cookies.set('token', token, { httpOnly: true });
		return response;
	} catch (error) {
		console.log('Error', error.message);
		return new Response('Something went wrong ', { status: 500 });
	}
};
