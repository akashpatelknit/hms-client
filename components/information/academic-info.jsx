import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { AcademicInfoForm } from '@/app/(pages)/(user)/profile/_components/academic-info-update-modal';
const Academics = ({ user }) => {
	const edit = false;
	return (
		<Card className="p-3 md:p-5 ">
			<div className=" flex justify-between items-center">
				<h1 className=" text-xl font-semibold py-2">Academics </h1>
				<AcademicInfoForm />
			</div>
			<Separator className="my-3" />
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Branch : </h1>
					<p className="">{user?.branch}</p>
				</Card>
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Year : </h1>
					<p className="">{user?.year}</p>
				</Card>
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Roll Number : </h1>
					<p className="">{user?.rollNo}</p>
				</Card>

				{user && user.year >= 1 && (
					<Card className="flex items-center gap-3 p-2">
						<h1 className="text-gray-500">First Year CGPA/Rank:</h1>
						<p>{user.first_cgpa}</p>
					</Card>
				)}
				{user && user.year >= 2 && (
					<Card className="flex items-center gap-3 p-2">
						<h1 className="text-gray-500">Second Year CGPA:</h1>
						<p>{user.second_cgpa}</p>
					</Card>
				)}

				{user && user.year >= 3 && (
					<Card className="flex items-center gap-3 p-2">
						<h1 className="text-gray-500">Third Year CGPA:</h1>
						<p>{user.third_cgpa}</p>
					</Card>
				)}

				{user && user.year >= 4 && (
					<Card className="flex items-center gap-3 p-2">
						<h1 className="text-gray-500">Final Year CGPA:</h1>
						<p>{user.final_cgpa}</p>
					</Card>
				)}
			</div>
		</Card>
	);
};

export default Academics;
