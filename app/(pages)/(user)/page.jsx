'use client';
import { getNotification } from '@/action/get-notification';
import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardsDemo';
import Container from '@/components/container';
import Features from '@/components/feature';
import { CarouselPlugin } from '@/components/hero';
import Notification from '@/components/notification';
import { auth, currentUser } from '@clerk/nextjs';
import { useEffect } from 'react';
export default function Home() {
	return (
		<div>
			<CarouselPlugin />
			<Features />
			<div className="w-full mx-auto bg-[#FFF2EC]">
				<Container>
					<div className=" my-20">
						<h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl ">
							Your Convenient Hostel Allocation Platform
						</h2>
						<p className="mt-4 text-gray-600 text-md">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed quis eros at lacus feugiat hendrerit sed
							ut tortor. Suspendisse
						</p>
					</div>
					<div className=" flex flex-col px-2 md:px-2 md:flex-row max-w-7xl mx-auto pt-10 pb-10 md:pt-10 gap-5 md:gap-10">
						<div className=" w-full md:max-w-[60%] ">
							<Notification />
						</div>
						<div className=" w-full md:max-w-[40%]">
							<Notification />
						</div>
					</div>
				</Container>
			</div>
			<div className="my-20">
				<div className=" my-10 max-w-7xl mx-auto ">
					<h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl ">
						Your Convenient Hostel Allocation Platform
					</h2>
					<p className="mt-4 text-gray-600 text-md">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed quis eros at lacus feugiat hendrerit sed ut tortor.
						Suspendisse
					</p>
				</div>
				<InfiniteMovingCardsDemo />
			</div>
		</div>
	);
}
