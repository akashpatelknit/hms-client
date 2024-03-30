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
import React, { useEffect } from 'react';

const Profile = () => {
	// const userClerk = await currentUser();
	const userClerk = {
		userId: 1,
		fullname: 'Rama',
		email: '',
	};
	useEffect(() => {});
	// console.log(userClerk.username);
	return (
		<div className=" min-h-screen max-w-7xl mx-auto py-10 w-full px-5 md:px-10">
			<div className=" flex flex-col md:flex-row gap-10 w-full">
				<Card className="p-5">
					<div className=" flex flex-col justify-center min-w-xl items-center">
						{/* <Image
							src={userClerk?.imageUrl}
							alt="profile"
							width="200"
							height="200"
							className=" rounded-full aspect-square"
						/> */}
						{/* <UserButton /> */}
						<div className=" flex items-center justify-center">
							{/* <h1>
								{userClerk?.firstName} {userClerk.lastName}
							</h1> */}
						</div>
						<Link
							href={`/updateUser/`}
							className={cn(buttonVariants(), 'fit-content mt-5')}
						>
							Update Profile
						</Link>
					</div>
				</Card>
				<div className=" w-full flex flex-col gap-3">
					{/* <PersonalInfo user={userClerk} /> */}
					<Hostel />
					{/* <Academics user={user} /> */}
					{/* <PaymentInfo user={user} /> */}
				</div>
			</div>
		</div>
	);
};

export default Profile;
