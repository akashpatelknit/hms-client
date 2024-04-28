'use client';
import { useState } from 'react';
import Container from '@/components/container';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';

const Feedback = () => {
	const { user } = useSelector((state) => state.user);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		studentId: user?.id,
		hostelId: user?.hostel,
		foodQuality: 1,
		cleanliness: 1,
		electricity: 1,
		staffBehavior: 1,
		overallSatisfaction: 1,
	});

	const handleSubmit = async () => {
		setLoading(true);
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/feedback`,
				formData
			);
			toast.success('Feedback submitted successfully');
		} catch (error) {
			if (error.response) {
				toast.error(error.response.data.message);
			} else {
				toast.error('An unexpected error occurred.');
			}
		} finally {
			setLoading(false);
			setFormData({
				studentId: user?.id,
				hostelId: '86f87585-0587-47db-81ce-0d9edd3e73b0',
				foodQuality: 1,
				cleanliness: 1,
				electricity: 1,
				staffBehavior: 1,
				overallSatisfaction: 1,
			});
		}
	};

	return (
		<Container>
			<div className=" my-10">
				<h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl text-center">
					Welcome to the Hostel Feedback Portal!
				</h2>
				<p className="mt-4 text-gray-600 text-md text-center w-[75%] m-auto">
					Your feedback matters to us as we strive to create the best
					living experience for all residents. Please take a moment to
					share your thoughts and suggestions on various aspects of
					hostel life. Your feedback will help us identify areas for
					improvement and ensure that your stay here is comfortable
					and enjoyable.
				</p>
			</div>
			<div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
				<div className=" border p-3 rounded-md">
					<Label htmlFor="range">Food Quality and Variety</Label>
					<div className=" flex items-center justify-center gap-5">
						<Slider
							className="mt-2"
							defaultValue={[formData.foodQuality]}
							value={[formData.foodQuality]}
							id="range"
							max={10}
							min={1}
							step={1}
							disable={loading}
							onValueChange={(value) =>
								setFormData({
									...formData,
									foodQuality: value[0],
								})
							}
						/>
						<div className=" flex items-center justify-center gap-5 h-6 w-6 border p-2">
							<span className="p-2">{formData.foodQuality}</span>
						</div>
					</div>
					<div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
						<span>1</span>
						<span>10</span>
					</div>
				</div>
				<div className=" border p-3 rounded-md">
					<Label htmlFor="range">Cleanliness and Maintenance</Label>
					<div className=" flex items-center justify-center gap-5">
						<Slider
							className="mt-2"
							defaultValue={[formData.cleanliness]}
							value={[formData.cleanliness]}
							id="range"
							max={10}
							min={1}
							step={1}
							disable={loading}
							onValueChange={(value) =>
								setFormData({
									...formData,
									cleanliness: value[0],
								})
							}
						/>
						<div className=" flex items-center justify-center gap-5 h-6 w-6 border p-2">
							<span className="p-2">{formData.cleanliness}</span>
						</div>
					</div>
					<div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
						<span>1</span>
						<span>10</span>
					</div>
				</div>
				<div className=" border p-3 rounded-md">
					<Label htmlFor="range">Electricity and Facilities</Label>
					<div className=" flex items-center justify-center gap-5">
						<Slider
							className="mt-2"
							defaultValue={[formData.electricity]}
							value={[formData.electricity]}
							id="range"
							max={10}
							min={1}
							step={1}
							disable={loading}
							onValueChange={(value) =>
								setFormData({
									...formData,
									electricity: value[0],
								})
							}
						/>
						<div className=" flex items-center justify-center gap-5 h-6 w-6 border p-2">
							<span className="p-2">{formData.electricity}</span>
						</div>
					</div>
					<div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
						<span>1</span>
						<span>10</span>
					</div>
				</div>
				<div className=" border p-3 rounded-md">
					<Label htmlFor="range">
						Staff Behavior and Responsiveness
					</Label>
					<div className=" flex items-center justify-center gap-5">
						<Slider
							className="mt-2"
							defaultValue={[formData.staffBehavior]}
							value={[formData.staffBehavior]}
							id="range"
							max={10}
							min={1}
							step={1}
							disable={loading}
							onValueChange={(value) =>
								setFormData({
									...formData,
									staffBehavior: value[0],
								})
							}
						/>
						<div className=" flex items-center justify-center gap-5 h-6 w-6 border p-2">
							<span className="p-2">
								{formData.staffBehavior}
							</span>
						</div>
					</div>
					<div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
						<span>1</span>
						<span>10</span>
					</div>
				</div>
				<div className=" border p-3 rounded-md">
					<Label htmlFor="range">
						Overall Satisfaction and Suggestions
					</Label>
					<div className=" flex items-center justify-center gap-5">
						<Slider
							className="mt-2"
							defaultValue={[formData.overallSatisfaction]}
							value={[formData.overallSatisfaction]}
							id="range"
							max={10}
							min={1}
							step={1}
							disable={loading}
							onValueChange={(value) =>
								setFormData({
									...formData,
									overallSatisfaction: value[0],
								})
							}
						/>
						<div className=" flex items-center justify-center gap-5 h-6 w-6 border p-2">
							<span className="p-2">
								{formData.overallSatisfaction}
							</span>
						</div>
					</div>
					<div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
						<span>1</span>
						<span>10</span>
					</div>
				</div>
			</div>
			<Button
				className="mt-5 w-fit"
				onClick={handleSubmit}
				disabled={loading}
			>
				Submit Feedback
			</Button>
		</Container>
	);
};

export default Feedback;
