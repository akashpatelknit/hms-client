'use client';

import FeatureCard from './cards/features-card';
import Container from './container';

export default function Features() {
	const features = [
		{
			title: 'Automatic Room Allotment',
			subtitle:
				'Efficiently allocates rooms based on preferences and availability.',
			color: '#FFAEC0',
		},
		{
			title: 'Complaint Management',
			subtitle:
				'Allows students to lodge complaints for prompt resolution.',
			color: '#FFDF99',
		},
		{
			title: 'User Profiles',
			subtitle:
				'Enables creation of personalized profiles for better communication.',
			color: '#C5C5FC',
		},
		{
			title: 'Real-Time Updates',
			subtitle:
				'Provides instant notifications on room allotments and complaints.',
			color: '##FFDF99',
		},
		{
			title: 'Feedback Mechanism',
			subtitle: 'Collects feedback from students to improve services.',
			color: '#FFAEC0',
		},
		{
			title: 'Mobile Compatibility',
			subtitle: 'Accessible from any device for convenient management.',
			color: '#C5C5FC',
		},
	];

	return (
		<Container>
			<div className=" my-20">
				<h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl ">
					Your Convenient Hostel Allocation Platform
				</h2>
				<p className="mt-4 text-gray-600 text-md">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					quis eros at lacus feugiat hendrerit sed ut tortor.
					Suspendisse
				</p>
			</div>
			<div className=" grid grid-cols-1 md:grid-cols-3 gap-10 w-full my-20">
				{features.map((feature, index) => (
					<FeatureCard
						key={index}
						title={feature.title}
						subtitle={feature.subtitle}
						color={feature.color}
					/>
				))}
			</div>
		</Container>
	);
}
