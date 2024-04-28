import React from 'react';
import { Card } from '../ui/card';
import Payment from '@/app/(pages)/(user)/profile/_components/payment';

const PaymentInfo = ({ user }) => {
	return (
		<Card className="p-3 md:p-5 ">
			<h1 className=" text-xl font-semibold py-2">Payment </h1>
			<div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 w-full mb-3">
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Hostel Fee : </h1>
					<p className=" font-semibold">{user?.hostelfee}</p>
				</Card>
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Hostel Fee Due : </h1>
					<p className=" font-semibold">{user?.hostelDue}</p>
				</Card>
				{/* <Payment type="hostel" due={user?.hostelDue} user={user} />/ */}
			</div>
			<div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 w-full mb-3">
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Mess Fee : </h1>
					<p className=" font-semibold">{user?.messfee}</p>
				</Card>
				<Card className="flex items-center gap-3 p-2 ">
					<h1 className=" text-gray-500"> Mess Fee Due : </h1>
					<p className=" font-semibold">{user?.messDue}</p>
				</Card>
				{/* <Payment type="mess" due={user?.messDue} user={user} /> */}
			</div>
		</Card>
	);
};

export default PaymentInfo;
