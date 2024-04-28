'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from './avatar';
import Image from 'next/image';

const InfiniteMovingCards = ({
	hostels = [],
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}) => {
	const containerRef = useRef(null);
	const scrollerRef = useRef(null);
	const [start, setStart] = useState(false);

	const addAnimation = () => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	};
	useEffect(() => {
		addAnimation();
	}, []);

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards'
				);
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse'
				);
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'20s'
				);
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'40s'
				);
			} else {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'80s'
				);
			}
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20  max-w-7xl overflow-hidden',
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{hostels.map((hostel, idx) => (
					<li
						className="w-[350px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
						style={{
							background: hostel.color || '#FFDF99',
						}}
						key={hostel.name}
					>
						<div className="relative m-5 flex w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
							<div className="relative mx-3 mt-3 flex h-40 overflow-hidden rounded-xl">
								<Image
									className="object-cover"
									src={
										hostel.banner ||
										'https://utfs.io/f/61a42c35-8d8c-4ea5-bdad-0b49ee6d8de5-rszi6z.jpg'
									}
									alt="product image"
									width={400}
									height={400}
								/>
								<span className="absolute top-0 left-0 m-2 rounded-md bg-black px-2 text-center text-sm font-medium  flex items-center p-1">
									<span className="text-white">
										Year : {hostel.year}
									</span>
									<span className="ml-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs">
										{hostel.averageRating}
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
								</span>
							</div>
							<div className="mt-4 px-5 pb-5">
								<h5 className="text-sm tracking-tight text-slate-900 font-semibold">
									{hostel.name}
								</h5>
								<div className="mt-1 mb-1 flex items-center justify-between">
									<p>
										<span className="text-xs  text-slate-900">
											Food Quality
										</span>
									</p>
									<div className="flex items-center">
										<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs ">
											{hostel.sumOfAllRatings.foodQuality}
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
								<div className="mt-1 mb-1 flex items-center justify-between">
									<p>
										<span className="text-xs  text-slate-900">
											Cleanliness
										</span>
									</p>
									<div className="flex items-center">
										<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs">
											{hostel.sumOfAllRatings.cleanliness}
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
								<div className="mt-1 mb-1 flex items-center justify-between">
									<p>
										<span className="text-xs  text-slate-900">
											Electricity
										</span>
									</p>
									<div className="flex items-center">
										<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs">
											{hostel.sumOfAllRatings.electricity}
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
								<div className="mt-1 mb-1 flex items-center justify-between">
									<p>
										<span className="text-xs  text-slate-900">
											Staff Behavior
										</span>
									</p>
									<div className="flex items-center">
										<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs">
											{
												hostel.sumOfAllRatings
													.staffBehavior
											}
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
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default InfiniteMovingCards;
