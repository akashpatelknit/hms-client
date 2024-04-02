import axios from 'axios';
import { verify } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function GET(request) {
	const token = request.cookies.get('hmstoken') || '';
	if (!token) {
		return NextResponse.json(
			{
				message: 'Unauthorized',
			},
			{
				status: 401,
			}
		);
	}

	const { value } = token;

	// Always check this
	const secret = process.env.NEXT_PUBLIC_JWT_SECRET || '';

	try {
		const user = verify(value, secret);
		const fetchedUser = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/user/${user.data.id}`
		);

		// console.log('fetchedUser', fetchedUser.data);
		const response = {
			user,
			fetchedUser: fetchedUser.data,
		};

		return new Response(JSON.stringify(response), {
			status: 200,
		});
	} catch (e) {
		return NextResponse.json(
			{
				message: 'Something went wrong',
			},
			{
				status: 400,
			}
		);
	}
}
