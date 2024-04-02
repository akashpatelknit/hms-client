'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import fetchUserData from '@/lib/actons/fetchUser';

export function AcademicInfoForm() {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const router = useRouter();
	const [formData, setFormData] = useState({
		fullName: user?.fullName || '',
		email: user?.email || '',
		phone: user?.phone || '',
		branch: user?.branch || '',
		year: user?.year || '',
		rollNo: user?.rollNo || '',
		cgpa: user?.cgpa || '',
	});
	const [loading, setLoading] = useState(false);

	async function updateAcademics() {
		setLoading(true);
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/user/${user.id}`,
				formData
			);
			console.log('response', response);
			dispatch(fetchUserData(user.id));
			toast.success('Academics info updated successfully');
		} catch (error) {
			console.log('Error in Uploading coomplaints', error.message);
			toast.error('Error in updating academics info');
		} finally {
			setLoading(false);
		}
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Update</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile information here. Click
						save when you are done.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4 w-full">
					{/* <div className=" flex gap-3 flex-col md:flex-row"> */}
						<div className="grid grid-cols-4 items-center gap-4">
							<Label
								htmlFor="fullName"
								className=" text-xs -mb-2"
							>
								Full Name
							</Label>
							<Input
								id="fullName"
								value={formData.fullName}
								className="col-span-4"
								onChange={(e) =>
									setFormData({
										...formData,
										fullName: e.target.value,
									})
								}
								disabled={loading}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="email" className=" text-xs -mb-2">
								Email
							</Label>
							<Input
								id="email"
								value={formData.email}
								className="col-span-4"
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
								disabled={loading}
							/>
						</div>
					{/* </div> */}
					<div className=" flex gap-3 flex-col md:flex-row">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="phone" className=" text-xs -mb-2">
								Phone
							</Label>
							<Input
								id="phone"
								value={formData.phone}
								className="col-span-4"
								onChange={(e) =>
									setFormData({
										...formData,
										phone: e.target.value,
									})
								}
								disabled={loading}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="rollno" className=" text-xs -mb-2">
								Year
							</Label>
							<Select
								onValueChange={(value) =>
									setFormData({ ...formData, year: value })
								}
								disabled={loading}
							>
								<SelectTrigger className="col-span-4">
									<SelectValue placeholder={formData.year} />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="First Year">
										First Year
									</SelectItem>
									<SelectItem value="Second Year">
										Second Year
									</SelectItem>
									<SelectItem value="Third Year">
										Third Year
									</SelectItem>
									<SelectItem value="Final Year">
										Final Year
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className=" flex gap-3 flex-col md:flex-row">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="rollno" className=" text-xs -mb-2 w-full">
								Roll.Number
							</Label>
							<Input
								id="rollno"
								value={formData.rollNo}
								className="col-span-4"
								onChange={(e) =>
									setFormData({
										...formData,
										rollNo: e.target.value,
									})
								}
								disabled={loading}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="cgpa" className=" text-xs -mb-2">
								CGPA
							</Label>
							<Input
								id="cgpa"
								value={formData.cgpa}
								className="col-span-4"
								type="number"
								min="0"
								max="10"
								onChange={(e) =>
									setFormData({
										...formData,
										cgpa: parseFloat(e.target.value),
									})
								}
								disabled={loading}
							/>
						</div>
					</div>

					<div className="grid grid-cols-4 items-center gap-4 w-full">
						<Label htmlFor="rollno" className=" text-xs -mb-2">
							Branch
						</Label>
						<Select
							onValueChange={(value) =>
								setFormData({ ...formData, branch: value })
							}
							disabled={loading}
						>
							<SelectTrigger className="col-span-4">
								<SelectValue placeholder={formData.branch} />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="CSE">
									Computer Science and Engineering
								</SelectItem>
								<SelectItem value="IT">
									Information Technology
								</SelectItem>
								<SelectItem value="ME">
									Mechanical Engineering
								</SelectItem>
								<SelectItem value="ECE">
									Electronics and Communication Engineering
								</SelectItem>
								<SelectItem value="EL">
									Electrical Engineering
								</SelectItem>
								<SelectItem value="CE">
									Civil Engineering
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={updateAcademics}>Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
