'use client';
import Academics from '@/components/information/academic-info';
import Hostel from '@/components/information/hostel-info';
import PaymentInfo from '@/components/information/payment-info';
import PersonalInfo from '@/components/information/personal-info';
import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { UserButton, currentUser } from '@clerk/nextjs';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Payment from './_components/payment';
import ImageUpload from '@/components/imageUpload';

const Profile = () => {
	const { user } = useSelector((state) => state.user);
	return (
		<div className=" min-h-screen max-w-7xl mx-auto py-10 w-full px-5 md:px-10">
			<div className=" flex flex-col md:flex-row gap-10 w-full">
				<Card className="p-5">
					<div className=" flex flex-col justify-center min-w-xl items-center relative">
						<Image
							src={user?.avatar}
							alt="profile"
							width="200"
							height="200"
							className=" rounded-full aspect-square relative overflow-hidden"
						/>

						<div className=" ">
							<ImageUpload
								onChange={() => console.log('')}
								onRemove={() => console.log('')}
							/>
						</div>
						<div className=" flex items-center justify-center mt-2">
							<h1>{user?.fullName}</h1>
						</div>
					</div>
				</Card>
				<div className=" w-full flex flex-col gap-3">
					<PersonalInfo user={user} />
					<Hostel />
					<Academics user={user} />
					<PaymentInfo user={user} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
