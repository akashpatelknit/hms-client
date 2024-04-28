'use client';
import Container from '@/components/container';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import PaymentFee from './_components/payment';

const Payment = () => {
	const { user } = useSelector((state) => state.user);
	return (
		<Container>
			<div className=" my-10">
				<h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl text-center">
					Welcome to the Hostel Payment Portal!
				</h2>
				<p className="mt-4 text-gray-600 text-md text-center w-[75%] m-auto">
					Please select the payment option you would like to proceed
					with. Thank you for your cooperation.
				</p>
			</div>
			<div className=" grid grid-cols-1 md:grid-cols-3">
				<div className="relative m-5 flex w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
					<div className="relative mx-3 mt-3 flex h-40 overflow-hidden rounded-xl">
						<Image
							className="object-cover"
							src={
								'https://utfs.io/f/61a42c35-8d8c-4ea5-bdad-0b49ee6d8de5-rszi6z.jpg'
							}
							alt="product image"
							width={600}
							height={400}
						/>
						<span className="absolute top-0 left-0 m-2 rounded-md bg-black px-2 text-center text-sm font-medium text-white">
							{/* Year : {hostel.year} */}
						</span>
					</div>
					<div className="mt-4 px-5 pb-5">
						<h5 className="text-sm tracking-tight text-slate-900">
							{/* {hostel.name} */}
						</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-xs font-bold text-slate-900"></span>
							</p>
							<div className="flex items-center">
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
									5.0
								</span>
								<svg
									aria-hidden="true"
									className="h-5 w-5 text-yellow-300"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
								</svg>
							</div>
						</div>
						<PaymentFee
							type="hostel"
							due={user?.hostelDue}
							user={user}
						/>
					</div>
				</div>
				<div className="relative m-5 flex w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
					<div className="relative mx-3 mt-3 flex h-40 overflow-hidden rounded-xl">
						<Image
							className="object-cover"
							src={
								'https://utfs.io/f/61a42c35-8d8c-4ea5-bdad-0b49ee6d8de5-rszi6z.jpg'
							}
							alt="product image"
							width={600}
							height={400}
						/>
						<span className="absolute top-0 left-0 m-2 rounded-md bg-black px-2 text-center text-sm font-medium text-white">
							{/* Year : {hostel.year} */}
						</span>
					</div>
					<div className="mt-4 px-5 pb-5">
						<h5 className="text-sm tracking-tight text-slate-900">
							{/* {hostel.name} */}
						</h5>
						<div className="mt-2 mb-5 flex items-center justify-between">
							<p>
								<span className="text-xs font-bold text-slate-900"></span>
							</p>
							<div className="flex items-center">
								<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
									5.0
								</span>
								<svg
									aria-hidden="true"
									className="h-5 w-5 text-yellow-300"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
								</svg>
							</div>
						</div>
						<PaymentFee
							type="mess"
							due={user?.messDue}
							user={user}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Payment;
