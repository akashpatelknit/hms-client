'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LoginForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { push } = useRouter();
	console.log('formData', formData);
	const [loading, setLoading] = useState(false);
	const loginHandler = async () => {
		console.log('formData', formData);
		setLoading(true);
		try {
			const user = await axios.post('/api/auth/login', formData);
			localStorage.setItem('user', JSON.stringify(user.data.user));
			push('/');
			console.log(user);
		} catch (error) {
			console.log('Error', error.message);
		} finally {
			setLoading(false);
			setFormData({
				email: '',
				password: '',
			});
		}
	};
	return (
		<div className=" min-h-screen flex items-center justify-center">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account.
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							required
							disabled={loading}
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							required
							disabled={loading}
							onChange={(e) =>
								setFormData({
									...formData,
									password: e.target.value,
								})
							}
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Button
						className="w-full"
						onClick={loginHandler}
						disabled={loading}
					>
						Sign in
					</Button>
				</CardFooter>
				<div className="mt-0 mb-4 text-center text-sm">
					Don&apos;t have an account?{' '}
					<Link href="/register" className="underline">
						Sign in
					</Link>
				</div>
			</Card>
		</div>
	);
}

export default LoginForm;
