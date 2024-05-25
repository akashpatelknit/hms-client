'use client';

import { useEffect, useState } from 'react';
import { ImagePlus } from 'lucide-react';
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from './ui/button';
import { Card } from './ui/card';

const ImageUpload = ({ defaultValues, setDefaultValues }) => {
	const [mounted, setMounted] = useState(false);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const onUpload = async (result) => {
		console.log(result.info.secure_url);
		setDefaultValues({
			...defaultValues,
			imgByStudent: result.info.secure_url,
		});
	};

	if (!mounted) {
		return null;
	}

	return (
		<CldUploadWidget onUpload={onUpload} uploadPreset="ml_default">
			{({ open }) => {
				const onClick = () => {
					if (loading) return;
					open();
				};
				return (
					<Card
						onClick={onClick}
						disabled={loading}
						variant="outline"
						type="button"
						className="flex flex-col justify-center items-center w-full h-32 cursor-pointer border-dashed border-2 border-gray-300 rounded-lg p-4"
					>
						<ImagePlus className="w-8 h-8 mr-4" />
						<br />
						<span>Chose file to upload...</span>
					</Card>
				);
			}}
		</CldUploadWidget>
	);
};

export default ImageUpload;
