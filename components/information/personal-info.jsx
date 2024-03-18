import React from 'react';
import { Card } from '../ui/card';

const PersonalInfo = ({ user }) => {
	return (
		<Card className="p-3 md:p-5 ">
			<h1 className=" text-xl font-semibold py-2">
				Personal Information
			</h1>
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Name : </h1>
					<p className="">
						{user?.firstName} {user?.lastName}
					</p>
				</Card>

				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Phone Number : </h1>
					<p className="">{user?.phoneNumbers[0]?.phoneNumber}</p>
				</Card>
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Email : </h1>
					<p className=" ">{user?.emailAddresses[0]?.emailAddress}</p>
				</Card>
			</div>
		</Card>
	);
};

export default PersonalInfo;
