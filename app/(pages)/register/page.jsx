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
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import axios from 'axios';
import { Eye, EyeOffIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function RegisterForm() {
	const [formData, setFormData] = useState({
		rollNo: '',
		password: '',
		cpassword: '',
		year: '',
		phone: '',
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
				rollNo: '',
				password: '',
				cpassword: '',
				phone: '',
				year: '',
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
							{/* <div className="grid gap-2">
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
							</div> */}
							<div className="grid gap-2 w-full">
								<Label htmlFor="phone">Roll Number</Label>
								<Input
									id="phone"
									type="number"
									placeholder="roll number"
									required
									value={formData.rollNo}
									onChange={(e) =>
										setFormData({
											...formData,
											rollNo: parseFloat(e.target.value),
										})
									}
								/>
							</div>
						</div>

						{/* <div className="grid gap-2">
							<Label htmlFor="fullName">Select Your Year</Label>
							<Select
								onValueChange={(value) =>
									setFormData({
										...formData,
										year: value,
									})
								}
								value={formData.year}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select Year" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Years</SelectLabel>
										<SelectItem value="first">
											First Year
										</SelectItem>
										<SelectItem value="second">
											Second Year
										</SelectItem>
										<SelectItem value="third">
											Third Year
										</SelectItem>
										<SelectItem value="final">
											Final Year
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div> */}
						<div className="grid gap-2">
							<Label htmlFor="phone">Phone Number</Label>
							<Input
								id="phone"
								type="phone"
								placeholder="phone number"
								required
								value={formData.phone}
								onChange={(e) =>
									setFormData({
										...formData,
										phone: e.target.value,
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
									value={formData.password}
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
									value={formData.cpassword}
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
							disabled={
								formData.password !== formData.cpassword ||
								formData.phone.length !== 10 ||
								loading
							}
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
