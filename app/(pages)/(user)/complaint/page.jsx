'use client';
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Container from '@/components/container';
import useComplaints from '@/app/hooks/useComplaints';
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { data } from 'autoprefixer';
// import PersonalInfoForm from '../updateUser/_components/personal-info-form';
import { Separator } from '@/components/ui/separator';
import axios from 'axios';

const profileFormSchema = z.object({
	userId: z.string(),
	title: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters.',
		})
		.max(30, {
			message: 'Username must not be longer than 30 characters.',
		}),
	category: z.string({
		required_error: 'Please select an email to display.',
	}),
	description: z.string().max(160).min(4),
});

export default function Component() {
	const [loading, complaints] = useComplaints();

	const defaultValues = {
		userId: '1',
		title: '',
		category: '',
		description: '',
	};
	const form = useForm({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: 'onChange',
	});
	async function onSubmit(data) {
		console.log('data', data);

		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/complaint`,
				data
			);
			console.log('response', response.data);
		} catch (error) {
			console.log('Error in Uploading coomplaints', error.message);
		}
	}
	return (
		<>
			<Container>
				<div className=" flex flex-col-reverse md:flex-row justify-between gap-10">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Create new complaint</CardTitle>
							<CardDescription>
								Fill in the form below to submit your complaint.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)}>
									<Separator />
									<div className="mt-5 flex gap-5">
										<FormField
											control={form.control}
											name="title"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>
														Subject
													</FormLabel>
													<FormControl>
														<Input
															placeholder="Subject..."
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="category"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>
														Category
													</FormLabel>
													<FormControl>
														<Input
															placeholder="Category..."
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
											className="w-full"
										/>
									</div>
									<div className="mt-5 max-w-7xl mx-auto    w-full gap-5">
										<FormField
											control={form.control}
											name="description"
											type="text"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Desription
													</FormLabel>
													<FormControl>
														<Textarea
															placeholder="Description..."
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className="flex justify-end mt-5 w-full">
										<Button type="submit">Submit</Button>
									</div>
								</form>
							</Form>
							<Separator />
							<div className="grid gap-4">
								<h1 className=" text-xl font-semibold">
									Recent Complaint
								</h1>
								<Link
									className="flex gap-1 flex-col bg-gray-50 p-3 rounded-lg"
									href="#"
								>
									<div className=" font-medium text-xs">
										Complaint ID: {complaints[0]?.id}
									</div>
									<div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
										Subject : {complaints[0]?.title}
									</div>
									<div className="text-xs">
										Description :{' '}
										{complaints[0]?.description}
									</div>
									<div className="text-sm">
										Status :{' '}
										{complaints[0]?.status === 'open'
											? 'Open'
											: 'Resolved'}
									</div>
									<div className="ml-auto flex gap-3">
										<Badge
											varient="ghost"
											onClick={() =>
												console.log('badge click')
											}
										>
											View
										</Badge>

										<Badge className="bg-green-500">
											Mark as Resolved
										</Badge>
									</div>
								</Link>
							</div>
						</CardContent>
					</Card>

					{/* Complaints List */}
					<div className="grid gap-4 w-full">
						<Card>
							<CardHeader>
								<CardTitle>All complaints</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col-reverse gap-3 max-h-[80vh] overflow-y-scroll">
								{complaints?.map((complaint) => (
									<div
										className="grid gap-4"
										key={complaint.id}
									>
										<Link
											className="flex gap-1 flex-col bg-gray-50 p-3 rounded-lg"
											href="#"
										>
											<div className=" font-medium text-xs">
												<span className=" font-medium">
													Complaint ID:
												</span>{' '}
												{complaint.id}
											</div>
											<div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
												<span className=" font-medium">
													Subject :
												</span>{' '}
												{complaint.title}
											</div>
											<div className="text-xs">
												<span className=" font-medium">
													Description :
												</span>{' '}
												{complaint.description}
											</div>
											<div className="text-sm">
												Status :{' '}
												{complaint.status === 'open' ? (
													<Badge>Open</Badge>
												) : (
													<Badge>Resolved</Badge>
												)}
											</div>
											<div className="ml-auto flex gap-3">
												<Badge
													varient="ghost"
													onClick={() =>
														console.log(
															'badge click'
														)
													}
												>
													View
												</Badge>

												<Badge className="bg-green-500">
													Mark as Resolved
												</Badge>
											</div>
										</Link>
									</div>
								))}
							</CardContent>
						</Card>
						{/* <Card>
					<CardHeader>
						<CardTitle>Viewing complaint #1234</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							<div>
								<div className="font-semibold">Title</div>
								<div>Missing items in my order</div>
							</div>
							<div>
								<div className="font-semibold">Description</div>
								<div>
									I received my package today, but some items
									are missing. I ordered 5 items, but only
									received 3.
								</div>
							</div>
							<div>
								<div className="font-semibold">Category</div>
								<div>Shipping</div>
							</div>
							<div>
								<div className="font-semibold">Status</div>
								<div>Open</div>
							</div>
						</div>
					</CardContent>
				</Card> */}
					</div>
				</div>
			</Container>
		</>
	);
}
