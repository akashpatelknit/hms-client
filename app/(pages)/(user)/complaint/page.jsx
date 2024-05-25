'use client';
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
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
import { useEffect, useState } from 'react';
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
import { Separator } from '@/components/ui/separator';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import ImageUpload from '@/components/UploadThingImageUpload';
import Image from 'next/image';
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
	const [workers, setWorkers] = useState([]);
	const [loading, setLoading] = useState(false);
	const { user } = useSelector((state) => state.user);
	const [complaints] = useComplaints(user.id);
	const [defaultValues, setDefaultValues] = useState({
		userId: user.id,
		title: '',
		category: '',
		description: '',
		imgByStudent: '',
	});
	console.log('defaultValues', defaultValues);
	useEffect(() => {
		(async () => {
			axios
				.get(`${process.env.NEXT_PUBLIC_API_URL}/workers`)
				.then((response) => {
					setWorkers(response.data.workers);
				});
		})();
	}, []);
	// console.log('workers', workers);

	const form = useForm({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: 'onChange',
	});
	async function onSubmit(data) {
		data.imgByStudent = defaultValues.imgByStudent;
		console.log('data', data);
		setLoading(true);
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/complaint`,
				data
			);
			toast.success('Complaint submitted successfully');
			setTimeout(() => {
				window.location.reload();
			}, 1000);
			console.log('response', response.data);
		} catch (error) {
			console.log('Error in Uploading coomplaints');
			if (error.response) {
			} else {
				toast.error('An unexpected error occurred.');
			}
		} finally {
			setLoading(false);
			form.reset();
			setDefaultValues({
				userId: user.id,
				title: '',
				category: '',
				description: '',
			});
		}
	}
	console.log('complaints', complaints);
	const handleMarkAsResolved = async (id) => {
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/complaint/user/${user.id}`,
				{
					complaintId: id,
				}
			);
			window.location.reload();
			toast.success('Complaint resolved successfully');
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (error) {
			if (error.response) {
				toast.error(error.response.data.message);
			} else {
				toast.error('An unexpected error occurred.');
			}
		}
	};
	return (
		<>
			<Container>
				<div className=" flex flex-col md:flex-row justify-between gap-10">
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
									<div className="mt-5 flex md:flex-row flex-col gap-5">
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
															disabled={loading}
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
													<Select
														onValueChange={
															field.onChange
														}
														defaultValue={
															field.value
														}
														disabled={loading}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select a category" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															{workers.map(
																(worker) => (
																	<SelectItem
																		key={
																			worker.role
																		}
																		value={
																			worker.role
																		}
																	>
																		{
																			worker.role
																		}
																	</SelectItem>
																)
															)}
														</SelectContent>
													</Select>

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
															disabled={loading}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className="mt-5 max-w-7xl mx-auto  w-full gap-5 ">
										<ImageUpload
											defaultValues={defaultValues}
											setDefaultValues={setDefaultValues}
										/>
									</div>
									<div className="flex justify-end mt-5 w-full">
										<Button
											type="submit"
											disabled={loading}
										>
											Submit
										</Button>
									</div>
								</form>
							</Form>
							<Separator />
							{/* {complaints[0] && (
								<div className="grid gap-4">
									<h1 className=" text-xl font-semibold">
										Recent Complaint
									</h1>
									<Dialog>
										<DialogTrigger>
											<div className="flex gap-1 flex-col items-start justify-start bg-gray-50 p-3 rounded-lg text-start">
												<div className=" font-medium text-xs text-start">
													Complaint ID:{' '}
													{complaints[0]?.id}
												</div>
												<div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
													Subject :{' '}
													{complaints[0]?.title}
												</div>
												<div className="text-xs">
													Description :{' '}
													{complaints[0]?.description}
												</div>
												<div className="text-sm">
													Status :{' '}
													<Badge
														variant={
															complaints[0]
																.isResolved ===
															false
																? 'ghost'
																: 'success'
														}
													>
														{complaints[0]
															?.isResolved ===
														false
															? 'Open'
															: 'Resolved'}
													</Badge>
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
												</div>
											</div>
										</DialogTrigger>
										<DialogContent className=" px-5 w-[90%]">
											<DialogHeader>
												<DialogTitle>
													Are you absolutely sure?
												</DialogTitle>
												<DialogDescription>
													<div className="flex gap-1 flex-col items-start justify-start bg-gray-50 p-3 rounded-lg text-start">
														<div className=" font-medium text-xs text-start">
															Complaint ID:{' '}
															{complaints[0]?.id}
														</div>
														<div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
															Subject :{' '}
															{
																complaints[0]
																	?.title
															}
														</div>
														<div className="text-xs ">
															Description :{' '}
															{
																complaints[0]
																	?.description
															}
														</div>
														<div className="text-xs">
															Complaint By :{' '}
															{
																complaints[0]
																	?.userName
															}
														</div>

														<div className="text-xs">
															Assigned To :
															{
																complaints[0]
																	?.workerName
															}
														</div>
														<div className="text-xs">
															Phone No :
															{
																complaints[0]
																	?.workerPhone
															}
														</div>
														<div className="text-xs">
															Category :
															{
																complaints[0]
																	?.workerRole
															}
														</div>
														<div className="text-sm">
															Status :{' '}
															<Badge
																variant={
																	complaints[0]
																		?.isResolved ===
																	false
																		? 'ghost'
																		: 'success'
																}
															>
																{complaints[0]
																	?.isResolved ===
																false
																	? 'Open'
																	: 'Resolveddd'}
															</Badge>
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

															<Badge
																className="bg-green-500 cursor-pointer"
																onClick={() =>
																	handleMarkAsResolved(
																		complaints[0]
																			?.id
																	)
																}
																disabled={
																	complaints[0]
																		?.isResolved ===
																	true
																}
															>
																{complaints[0]
																	?.isResolved ===
																true
																	? 'Resolved'
																	: 'Mark as Resolved'}
															</Badge>
														</div>
													</div>
												</DialogDescription>
											</DialogHeader>
										</DialogContent>
									</Dialog>
								</div>
							)} */}
						</CardContent>
					</Card>

					{/* Complaints List */}
					<div className="grid gap-4 w-full">
						<Card>
							<CardHeader>
								<CardTitle>All complaints</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col gap-3 max-h-[80vh] overflow-y-scroll">
								{complaints?.map((complaint) => (
									<div
										className="grid gap-4"
										key={complaint.id}
									>
										<Dialog>
											<DialogTrigger>
												<div className="flex gap-1 flex-col items-start justify-start bg-gray-50 p-3 rounded-lg text-start">
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
														<Badge
															variant={
																complaint.isResolved ===
																false
																	? 'ghost'
																	: 'success'
															}
														>
															{complaint?.isResolved ===
															false
																? 'Open'
																: 'Resolved'}
														</Badge>
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
													</div>
												</div>
											</DialogTrigger>
											<DialogContent className=" px-5 w-[90%]">
												<DialogHeader>
													<DialogTitle>
														Are you absolutely sure?
													</DialogTitle>
													<DialogDescription>
														<div className="flex gap-1 flex-col items-start justify-start bg-gray-50 p-3 rounded-lg">
															<div className=" font-medium text-xs text-start">
																Complaint ID:{' '}
																{complaint?.id}
															</div>
															<div className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
																Subject :{' '}
																{
																	complaint?.title
																}
															</div>
															<div className="text-xs">
																Description :{' '}
																{
																	complaint?.description
																}
															</div>
															<div className="text-xs">
																Complaint By :
																{
																	complaint?.userName
																}
															</div>

															<div className="text-xs">
																Assigned To :
																{
																	complaint?.workerName
																}
															</div>
															<div className="text-xs">
																Phone No :
																{
																	complaint?.workerPhone
																}
															</div>
															<div className="text-xs">
																Category :
																{
																	complaint?.workerRole
																}
															</div>

															<div className="text-sm">
																Status :{' '}
																<Badge
																	variant={
																		complaint?.isResolved ===
																		false
																			? 'ghost'
																			: 'success'
																	}
																>
																	{complaint?.isResolved ===
																	false
																		? 'Open'
																		: 'Resolveddd'}
																</Badge>
															</div>
															<div className="ml-auto flex gap-3">
																<Badge
																	className="bg-green-500 cursor-pointer"
																	onClick={() =>
																		handleMarkAsResolved(
																			complaint.id
																		)
																	}
																	disabled={
																		complaint.isResolved ===
																		true
																	}
																>
																	{complaint.isResolved ===
																	true
																		? 'Resolved'
																		: 'Mark as Resolved'}
																</Badge>
															</div>
														</div>
														{complaint?.imgByStudent && (
															<div className="my-5">
																<p className="font-semibold ">
																	Complaint
																	Image by
																	Student
																</p>
																<Image
																	src={
																		complaint?.imgByStudent
																	}
																	alt="complaint"
																	className="w-full"
																	width={1080}
																	height={720}
																/>
															</div>
														)}
														{complaint?.imgByWorker && (
															<div className="my-5">
																<p className="font-semibold ">
																	Complaint
																	Image by
																	Worker
																</p>
																<Image
																	src={
																		complaint?.imgByWorker
																	}
																	alt="complaint"
																	className="w-full"
																	width={1080}
																	height={720}
																/>
															</div>
														)}
													</DialogDescription>
												</DialogHeader>
											</DialogContent>
										</Dialog>
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
