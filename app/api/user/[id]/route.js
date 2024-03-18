import client from '@/conf/config';
import connectDB from '@/db/db';
import { User } from '@/model/user.model';

import { Databases, Query } from 'appwrite';
import { NextResponse } from 'next/server';

const database = new Databases(client);

async function getUser(id) {
	try {
		const response = await database.listDocuments(
			process.env.NEXT_PUBLIC_HMSDB,
			process.env.NEXT_PUBLIC_HMS_USER_COLLECTION
		);
		console.log('response', response);
		return response;
	} catch (error) {
		console.log('error', error);
		throw error;
	}
}

export async function GET(req, { params }) {
	try {
		await connectDB();
		const { id } = params;
		const user = await getUser(id);
		console.log('user', user);
		return NextResponse.json(user);
	} catch (error) {
		console.log('error', error.message);
		return NextResponse.error(error);
	}
}

export async function POST(req) {
	try {
		await connectDB();
		const { email, fullname, userName } = await req.json();
		const user = await User.create({ email, fullname, userName });
		return NextResponse.json(user);
	} catch (error) {
		console.log('error', error.message);
		return NextResponse.error(error);
	}
}
