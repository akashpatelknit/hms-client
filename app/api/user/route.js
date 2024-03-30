import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST() {
	const newUser = await axios.post('http://localhost:3001/api/user');
	return NextResponse.json(newUser);
}
