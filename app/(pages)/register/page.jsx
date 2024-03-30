'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import axios from 'axios';

export function LoginForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const loginHandler = async () => {
		console.log('formData', formData);
		try {
			const user = await axios.post('/api/auth/login', formData);
			localStorage.setItem('user', JSON.stringify(user)
			console.log(user);
		} catch (error) {
			console.log('Error', error.message);
		}
	};
	return (
		<div className=" min-h-screen flex items-center justify-center">
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								required
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
								<Link
									href="#"
									className="ml-auto inline-block text-sm underline"
								>
									Forgot your password?
								</Link>
							</div>
							<Input
								id="password"
								type="password"
								required
								onChange={(e) =>
									setFormData({
										...formData,
										password: e.target.value,
									})
								}
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
							onClick={loginHandler}
						>
							Login
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{' '}
						<Link href="#" className="underline">
							Sign up
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default LoginForm;
