import client from '@/conf/config';

import { Databases, Query } from 'appwrite';
import { NextResponse } from 'next/server';

const database = new Databases(client);

async function getUser(id) {
	const query = new Query();
	query.equal('email', 'cotsec18@gmail.com');
	try {
		const response = await database.listDocuments(
			process.env.HMSDB,
			'65eb76da98fc1ee0a956',
			[`email.equal( ['cotsec18@gmail.com'] )`]
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
		const { id } = params;
		const user = await getUser(id);
		console.log('user', user);
		return NextResponse.json(user);
	} catch (error) {
		console.log('error', error.message);
		return NextResponse.error(error);
	}
}
