// 'use client';

// import Link from 'next/link';
// import { useFieldArray, useForm } from 'react-hook-form';
// import z from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// import { cn } from '@/lib/utils';
// import {
// 	Form,
// 	FormControl,
// 	FormDescription,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from '@/components/ui/form';
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';

// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import appwriteUserService from '@/appwrite/user';
// import { useRouter } from 'next/navigation';

// const profileFormSchema = z.object({
// 	year: z.string().max(160).min(4),
// 	branch: z
// 		.string()
// 		.min(2, {
// 			message: 'Username must be at least 2 characters.',
// 		})
// 		.max(30, {
// 			message: 'Username must not be longer than 30 characters.',
// 		}),
// 	rollno: z.string({
// 		required_error: 'Please select an email to display.',
// 	}),
// 	cgpa: z.string().max(10).min(1),
// });

// const defaultValues = {
// 	bio: 'I own a computer.',
// 	urls: [
// 		{ value: 'https://shadcn.com' },
// 		{ value: 'http://twitter.com/shadcn' },
// 	],
// };

// const AcademicInfoForm = ({ user }) => {
// 	const router = useRouter();
// 	const form = useForm({
// 		resolver: zodResolver(profileFormSchema),
// 		defaultValues,
// 		mode: 'onChange',
// 	});

// 	const { fields, append } = useFieldArray({
// 		name: 'urls',
// 		control: form.control,
// 	});

// 	async function onSubmit(data) {
// 		const updatedUser = await appwriteUserService.updateUser({
// 			id: user.$id,
// 			data,
// 		});
// 		if (updatedUser) {
// 			router.push(`/profile/${user.userId}`);
// 		}
// 		console.log('You submitted the following values:');
// 		console.log(data);
// 	}
// 	return (
// 		<Form {...form}>
// 			<form onSubmit={form.handleSubmit(onSubmit)}>
// 				<div className=" flex justify-between items-center mt-10">
// 					<h1 className=" text-xl font-semibold py-2 ">
// 						Academics Information
// 					</h1>
// 					<Button type="submit">Update</Button>
// 				</div>
// 				<Separator />
// 				<div className="mt-5 max-w-7xl mx-auto  grid grid-col-1 md:grid-cols-3  w-full gap-5 ">
// 					<FormField
// 						control={form.control}
// 						name="year"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Year</FormLabel>
// 								<Select
// 									onValueChange={field.onChange}
// 									defaultValue={field.value}
// 								>
// 									<FormControl>
// 										<SelectTrigger>
// 											<SelectValue placeholder="Select Your Year" />
// 										</SelectTrigger>
// 									</FormControl>
// 									<SelectContent>
// 										<SelectItem value="First Year">
// 											First Year
// 										</SelectItem>
// 										<SelectItem value="Second Year">
// 											Second Year
// 										</SelectItem>
// 										<SelectItem value="Third Year">
// 											Third Year
// 										</SelectItem>
// 										<SelectItem value="Final Year">
// 											Final Year
// 										</SelectItem>
// 									</SelectContent>
// 								</Select>
// 								<FormMessage />
// 							</FormItem>
// 						)}
// 					/>

// 					<FormField
// 						control={form.control}
// 						name="branch"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Email</FormLabel>
// 								<Select
// 									onValueChange={field.onChange}
// 									defaultValue={field.value}
// 								>
// 									<FormControl>
// 										<SelectTrigger>
// 											<SelectValue placeholder="Select Your Branch" />
// 										</SelectTrigger>
// 									</FormControl>
// 									<SelectContent>
// 										<SelectItem value="CSE">
// 											Computer Science and Engineering
// 										</SelectItem>
// 										<SelectItem value="IT">
// 											Information Technology
// 										</SelectItem>
// 										<SelectItem value="ME">
// 											Mechanical Engineering
// 										</SelectItem>
// 										<SelectItem value="ECE">
// 											Electronics and Communication
// 											Engineering
// 										</SelectItem>
// 										<SelectItem value="EL">
// 											Electrical Engineering
// 										</SelectItem>
// 										<SelectItem value="CE">
// 											Civil Engineering
// 										</SelectItem>
// 									</SelectContent>
// 								</Select>
// 								<FormMessage />
// 							</FormItem>
// 						)}
// 					/>
// 					<FormField
// 						control={form.control}
// 						name="rollno"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Roll Number</FormLabel>
// 								<FormControl>
// 									<Input placeholder="Roll No" {...field} />
// 								</FormControl>
// 								<FormMessage />
// 							</FormItem>
// 						)}
// 					/>

// 					<FormField
// 						control={form.control}
// 						name="cgpa"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>CGPA</FormLabel>
// 								<FormControl>
// 									<Input placeholder="CGPA" {...field} />
// 								</FormControl>
// 								<FormDescription>
// 									You can <span>@mention</span> other users
// 									and organizations to link to them.
// 								</FormDescription>
// 								<FormMessage />
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 			</form>
// 		</Form>
// 	);
// };

// export default AcademicInfoForm;
