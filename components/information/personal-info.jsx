import React from 'react';
import { Card } from '../ui/card';
import { AcademicInfoForm } from '@/app/(pages)/(user)/profile/_components/academic-info-update-modal';
import { Separator } from '../ui/separator';

const PersonalInfo = ({ user }) => {
	return (
		<Card className="p-3 md:p-5 ">
			<div className=" flex justify-between items-center">
				<h1 className=" text-xl font-semibold py-2">
					Personal Information{' '}
				</h1>
				<AcademicInfoForm />
			</div>
			<Separator className="my-3" />
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Name : </h1>
					<p className="">{user?.fullName}</p>
				</Card>

				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Phone Number : </h1>
					<p className="">{user?.phone}</p>
				</Card>
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Email : </h1>
					<p className=" ">{user?.email}</p>
				</Card>
			</div>
		</Card>
	);
};

export default PersonalInfo;
