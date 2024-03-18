import prismadb from '@/lib/prismadb';
import { data } from 'autoprefixer';
import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const user = await prismadb.user.create({
			data: {
				email: 'abc@gmail.com',
				password: '123456',
				fullName: 'Askh Aer',
				userName: 'askhaer',
				userId: '24342',
				phone: '1323131313',
			},
		});
		return NextResponse.json(user);
	} catch (error) {
		console.log('error', error.message);
		return NextResponse.error(error);
	}
}
