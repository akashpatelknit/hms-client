'use client';

import Link from 'next/link';
import { useFieldArray, useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from '@/lib/utils';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import appwriteUserService from '@/appwrite/user';
import { useRouter } from 'next/navigation';

const profileFormSchema = z.object({
	fullname: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters.',
		})
		.max(30, {
			message: 'Username must not be longer than 30 characters.',
		}),
	email: z
		.string({
			required_error: 'Please select an email to display.',
		})
		.email(),
	dob: z.string().max(160).min(4),
	phone: z.string().max(160).min(4),
});

const PersonalInfoForm = ({ user }) => {
	const router = useRouter();
	const defaultValues = {
		fullname: user?.name,
		email: user?.email,
	};
	const form = useForm({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	const { fields, append } = useFieldArray({
		name: 'urls',
		control: form.control,
	});

	async function onSubmit(data) {
		console.log('data', user, data);
		const updatedUser = await appwriteUserService.updateUser({
			id: user.$id,
			data,
		});
		if (updatedUser) {
			router.push(`/profile/${user.userId}`);
		}
		console.log(updatedUser);

		console.log('You submitted the following values:');
		console.log(data);
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className=" flex justify-between items-center mt-10">
					<h1 className=" text-xl font-semibold py-2 ">
						Personal Information
					</h1>
					<Button type="submit">Update</Button>
				</div>
				<Separator />
				<div className="mt-5 max-w-7xl mx-auto  grid grid-col-1 md:grid-cols-3  w-full gap-5 ">
					<FormField
						control={form.control}
						name="fullname"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<Input placeholder="Full Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="abc.20606@knit.ac.in"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									<span>
										Please use you college email id.
									</span>
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="dob"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Date Of Birth</FormLabel>
								<FormControl>
									<Input placeholder="dob" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						type="number"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Enter Your Phone No.</FormLabel>
								<FormControl>
									<Input
										placeholder="Phone Number"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</form>
		</Form>
	);
};

export default PersonalInfoForm;
