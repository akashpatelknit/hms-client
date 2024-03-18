import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const Hostel = ({ user }) => {
	const edit = false;
	return (
		<Card className="p-3 md:p-5 ">
			<div className=" flex justify-between items-center">
				<h1 className=" text-xl font-semibold py-2">Hostel Info</h1>
			</div>
			<Separator className="my-3" />
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Hostel Name : </h1>
					<p className="">Not Alloted</p>
				</Card>
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Room No : </h1>
					<p className="">Not Alloted</p>
				</Card>
			</div>
		</Card>
	);
};

export default Hostel;
