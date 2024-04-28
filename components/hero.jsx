'use client';
import * as React from 'react';

import Image from 'next/image';
import Container from './container';

export function CarouselPlugin() {
	return (
		<div className=" w-full mx-auto bg-[#FFF2EC]">
			<Container>
				<div className=" mx-auto py-16 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
						<div className="max-w-lg">
							<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
								Your Convenient Hostel Allocation Platform
							</h2>
							<p className="mt-4 text-gray-600 text-lg">
							Streamline your hostel experience with our comprehensive management system. Seamlessly manage room allotment, effortlessly handle fee payments, and ensure prompt resolution of complaints. Simplify your stay, from booking to departure, with our user-friendly interface designed to enhance your hostel experience.
							</p>
							<div className="mt-8">
								<a
									href="/project"
									className="text-blue-500 hover:text-blue-600 font-medium"
								>
									Learn more about us
									<span className="ml-2">&#8594;</span>
								</a>
							</div>
						</div>
						<div className="mt-12 md:mt-0 flex items-end justify-end">
							<Image
								src="/about.png"
								alt="About Us Image"
								class="object-cover "
								width={500}
								height={500}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
