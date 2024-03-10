'use client';
import Features from '@/components/feature';
import { CarouselPlugin } from '@/components/hero';
import Notification from '@/components/notification';


export default function Home() {
	return (
		<div>
			{/* <CarouselPlugin /> */}
			<div className=" flex flex-col px-2 md:px-2 md:flex-row max-w-7xl mx-auto pt-10 pb-10 md:pt-10 gap-5 md:gap-10">
				<div className=" w-full md:max-w-[50%] ">
					<Features />
				</div>
				<div className=" w-full md:max-w-[50%]">
					<Notification />
				</div>
			</div>
		</div>
	);
}
