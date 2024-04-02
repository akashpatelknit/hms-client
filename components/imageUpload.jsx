'use client';

import { useEffect, useState } from 'react';
import { ImagePlus, Trash } from 'lucide-react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import fetchUserData from '@/lib/actons/fetchUser';

const ImageUpload = ({ disabled, onChange }) => {
	const [mounted, setMounted] = useState(false);
	const { user } = useSelector((state) => state.user);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		setMounted(true);
	}, []);

	const onUpload = async (result) => {
		console.log(result.info.secure_url);
		setLoading(true);
		onChange(result.info.secure_url);

		axios
			.post(`${process.env.NEXT_PUBLIC_API_URL}/user/${user.id}`, {
				avatar: result.info.secure_url,
			})
			.then((response) => {
				console.log('response', response);
				toast.success('Profile Picture Updated Successfully');
				dispatch(fetchUserData(user.id));
			})
			.catch((error) => {
				console.log('Error in Uploading coomplaints', error.message);
				toast.error('Error in updating profile picture');
			})
			.finally(() => {
				setLoading(false);
			});
	};

	if (!mounted) {
		return null;
	}
	return (
		<div>
			<CldUploadWidget onUpload={onUpload} uploadPreset="ml_default">
				{({ open }) => {
					const onClick = () => {
						if (loading) return;
						open();
					};
					return (
						<Button
							onClick={onClick}
							disabled={loading}
							variant="outline"
							type="button"
                            className="flex items-center justify-center bg-none border-none"
						>
							<ImagePlus className=" w-4 h-4 mr-2" />
						</Button>
					);
				}}
			</CldUploadWidget>
		</div>
	);
};

export default ImageUpload;
