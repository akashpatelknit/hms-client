'use client';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import appwriteUserService from '@/appwrite/user';
import { useRouter } from 'next/navigation';
import Container from '@/components/container';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import useGetHostels from '@/app/hooks/useGetHostels';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';

const AcademicInfoForm = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { hostels } = useGetHostels();
	const { user } = useSelector((state) => state.user);
	const [formData, setFormData] = useState({
		userId: user?.id,
		first: '',
		second: '',
		third: '',
	});
	let filterHostels;
	if (user.gender === 'Female') {
		filterHostels = hostels.filter(
			(hostel) => hostel.gender === user?.gender
		);
	} else {
		filterHostels = hostels.filter(
			(hostel) =>
				hostel.year === user.year && hostel.gender === user?.gender
		);
	}
	console.log('hostels', hostels, user);
	const onSubmit = async () => {
		setLoading(true);
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/allotment-register`,
				formData
			);
			toast.success('Allotment registered successfully');
		} catch (error) {
			if (error.response) {
				toast.error(error.response.data.message);
			} else {
				toast.error('An unexpected error occurred.');
			}
		} finally {
			setLoading(false);
			setFormData({
				userId: user?.id,
				first: '',
				second: '',
				third: '',
			});
		}
	};
	return (
		<Container>
			<h1 className=" text-center text-3xl font-bold mt-5">
				Choose your preferences for hostels
			</h1>
			<div className=" w-[400px] min-h-[50vh] mx-auto flex-1 flex flex-col gap-5  justify-center">
				<div className="flex gap-2 flex-col w-full">
					<Label>First Preference</Label>
					<Select
						onValueChange={(value) =>
							setFormData({
								...formData,
								first: value,
							})
						}
						value={formData.first}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select hostel" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Hostels Prefrences</SelectLabel>
								{filterHostels.map((hostel) => (
									<SelectItem value={hostel.name}>
										{hostel.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="flex gap-2 flex-col w-full">
					<Label>Second Preference</Label>
					<Select
						onValueChange={(value) =>
							setFormData({
								...formData,
								second: value,
							})
						}
						value={formData.second}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select hostel" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Years</SelectLabel>
								{filterHostels.map((hostel) => (
									<SelectItem value={hostel.name}>
										{hostel.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="flex gap-2 flex-col w-full">
					<Label>Third Preference</Label>
					<Select
						onValueChange={(value) =>
							setFormData({
								...formData,
								third: value,
							})
						}
						value={formData.third}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select hostel" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Years</SelectLabel>
								{filterHostels.map((hostel) => (
									<SelectItem value={hostel.name}>
										{hostel.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<Button onClick={onSubmit}>Submit</Button>
			</div>
		</Container>
	);
};

export default AcademicInfoForm;
