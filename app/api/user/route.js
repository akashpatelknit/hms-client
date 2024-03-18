import client from '@/conf/config';
import prismadb from '@/lib/prismadb';

import { Databases, ID, Query } from 'appwrite';
import { NextResponse } from 'next/server';

const database = new Databases(client);

async function createUser(data) {
	try {
		const response = await database.createDocument(
			process.env.HMSDB,
			'65eb76da98fc1ee0a956',
			ID.unique(),
			data
		);
		return response;
	} catch (error) {
		console.log('error', error.message);
		throw error;
	}
}

export async function POST(req) {
	try {
		const { email, fullname, userId } = await req.json();
		const user = await createUser({ email, fullname, userId });
		if (user) {
			const prismaUser = await prismadb.user.create({
				data: {
					email: email,
					fullname: fullname,
					userId: userId,
				},
			});
		}
		return NextResponse.json(user);
	} catch (error) {
		console.log('error', error.message);
		return NextResponse.error(error);
	}
}
