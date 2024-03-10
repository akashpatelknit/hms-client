import React from 'react';
import { Card } from '../ui/card';

const Academics = ({ user }) => {
	return (
		<Card className="p-3 md:p-5 ">
			<h1 className=" text-xl font-semibold py-2">Academics </h1>
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
					<p className="">{user?.rollno}</p>
				</Card>
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Aggregate CGPA : </h1>
					<p className="">{user?.cgpa}</p>
				</Card>
			</div>
		</Card>
	);
};

export default Academics;
