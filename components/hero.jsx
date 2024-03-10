'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function CarouselPlugin() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	return (
		<div className=" w-full mx-auto">
			<Carousel
				plugins={[plugin.current]}
				className="w-full h-full"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
				arrow={false}
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-0">
								<Card>
									<CardContent
										className="flex aspect-square md:aspect-[2/.8] 
									 items-center justify-center p-6 relative"
									>
										<Image
											src="/photo.jpg"
											fill
											alt="photo"
											className="object-cover"
										/>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
