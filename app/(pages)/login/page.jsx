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
import { Separator } from '@/components/ui/separator';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import Imagee from 'next/image';
import Loader from '@/components/loader/looader';
export function LoginForm() {
	const [formData, setFormData] = useState({
		rollNo: '',
		password: '',
	});
	const { push } = useRouter();
	// console.log('formData', formData);
	const [loading, setLoading] = useState(false);
	const loginHandler = async () => {
		setLoading(true);
		axios
			.post('/api/auth/login', formData)
			.then((response) => {
				push('/');
				setLoading(false);
				setFormData({
					rollNo: '',
					password: '',
				});
			})
			.catch((error) => {
				console.log('error', error);
				if (error.response.status === 401) {
					toast.error('User not registered yet');
				}
				if (error.response.status === 402) {
					toast.error('Please verify your email');
				}
				setLoading(false);
			});
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className=" min-h-screen flex items-center justify-center flex-col gap-5">
					<div className="flex flex-shrink-0 items-center h-5 justify-center">
						<Imagee src="/logo.png" height={40} width={40} />
						<Separator
							orientation="vertical"
							className="w-[1.5px] h-[30px] bg-[#000] mx-2"
						/>
						<h1 className=" text-3xl font-semibold">HMS</h1>
					</div>
					<Card className="w-full max-w-sm">
						<CardHeader>
							<CardTitle className="text-2xl">Login</CardTitle>
							<CardDescription>
								Enter your email below to login to your account.
							</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="email">Roll Number</Label>
								<Input
									id="rollNo"
									type="number"
									placeholder="roll number"
									required
									value={formData.rollNo}
									disabled={loading}
									onChange={(e) =>
										setFormData({
											...formData,
											rollNo: parseFloat(e.target.value),
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
									value={formData.password}
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
								Sign Up
							</Link>
						</div>
					</Card>
				</div>
			)}
		</>
	);
}

export default LoginForm;
