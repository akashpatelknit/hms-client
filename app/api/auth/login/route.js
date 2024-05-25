import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const POST = async (NextRequest) => {
	try {
		const body = await NextRequest.json();
		const { rollNo, password } = body;

		if (!rollNo || !password) {
			return new Response('Roll Number and Password is required', {
				status: 401,
			});
		}
		// console.log('body', rollNo, password);

		const data = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/auth/login_new`,
			{
				rollNo,
				password,
			}
		);
		const user = data.data.user;
		console.log(user.isRegistered, user.isVerified);
		if (!user) {
			return NextResponse.json(
				{
					message: 'Username does not exist',
				},
				{
					status: 400,
				}
			);
		}

		if (user.isRegistered === false) {
			console.log('inside isRegistered');
			return NextResponse.json(
				{
					error: true,
					message: 'You are not registered yet',
				},
				{
					status: 401,
				}
			);
		}

		if (user.isVerified === false) {
			console.log('inside isVerified');
			return NextResponse.json(
				{
					message: 'Please verify your email',
				},
				{
					status: 402,
				}
			);
		}

		const tokenData = {
			data: data.data.user,
		};

		// console.log('tokenData', tokenData);
		const token = jwt.sign(tokenData, process.env.NEXT_PUBLIC_JWT_SECRET, {
			expiresIn: '10d',
		});

		console.log(token);
		const response = NextResponse.json({
			message: 'Login successfulling',
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
