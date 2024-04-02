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
import { Eye, EyeOffIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function RegisterForm() {
	const [formData, setFormData] = useState({
		userName: '',
		fullName: '',
		phone: '',
		email: '',
		password: '',
		cpassword: '',
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showCPassword, setShowCPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const { push } = useRouter();
	const togglePassword = () => {
		setShowPassword(!showPassword);
	};
	const toggleCPassword = () => {
		setShowCPassword(!showCPassword);
	};

	const registerHandler = async () => {
		console.log('formData', formData);
		setLoading(true);
		try {
			const user = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
				formData
			);
			toast.success('User registered successfully');
			push('/login');
			console.log(user);
		} catch (error) {
			if (error.response) {
				toast.error(error.response.data.message);
			} else {
				console.error('Error:', error);
				toast.error('An unexpected error occurred.');
			}
		} finally {
			setLoading(false);
			setFormData({
				userName: '',
				fullName: '',
				phone: '',
				email: '',
				password: '',
				cpassword: '',
			});
		}
	};
	return (
		<div className=" min-h-screen flex items-center justify-center">
			<Card className="mx-auto w-full md:max-w-md">
				<CardHeader>
					<CardTitle className="text-2xl">Register</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div className=" flex gap-5 flex-col md:flex-row w-full">
							<div className="grid gap-2">
								<Label htmlFor="email">Username</Label>
								<Input
									id="fullName"
									type="text"
									placeholder="John Doe"
									required
									onChange={(e) =>
										setFormData({
											...formData,
											userName: e.target.value,
										})
									}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="phone">Phone Number</Label>
								<Input
									id="phone"
									type="text"
									placeholder="08012345678"
									required
									onChange={(e) =>
										setFormData({
											...formData,
											phone: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="fullName">Full Name</Label>
							<Input
								id="fullName"
								type="text"
								placeholder="John Doe"
								required
								onChange={(e) =>
									setFormData({
										...formData,
										fullName: e.target.value,
									})
								}
							/>
						</div>
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
							<Label htmlFor="password">Password</Label>
							<div className=" flex relative">
								<Input
									id="password"
									type={showPassword ? 'text' : 'password'}
									required
									onChange={(e) =>
										setFormData({
											...formData,
											password: e.target.value,
										})
									}
									className="relative w-full"
								/>
								{showPassword ? (
									<EyeOffIcon
										className="absolute right-2 top-2 cursor-pointer"
										onClick={togglePassword}
									/>
								) : (
									<Eye
										className=" right-2 top-2 absolute cursor-pointer"
										onClick={togglePassword}
									/>
								)}
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Confirm Password</Label>
							<div className=" flex relative">
								<Input
									id="cpassword"
									type={showCPassword ? 'text' : 'password'}
									required
									onChange={(e) =>
										setFormData({
											...formData,
											cpassword: e.target.value,
										})
									}
									className="relative w-full"
								/>
								{showCPassword ? (
									<EyeOffIcon
										className="absolute right-2 top-2 cursor-pointer"
										onClick={toggleCPassword}
									/>
								) : (
									<Eye
										className=" right-2 top-2 absolute cursor-pointer"
										onClick={toggleCPassword}
									/>
								)}
							</div>
						</div>
						<Button
							type="submit"
							className="w-full"
							onClick={registerHandler}
							disabled={formData.password !== formData.cpassword}
						>
							Sign up
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Already have an account?{' '}
						<Link href="/login" className="underline">
							Sign in
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default RegisterForm;
