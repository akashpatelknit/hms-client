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
			link: '/allotment-form',
		},
		{
			title: 'Complaint Management',
			subtitle:
				'Allows students to lodge complaints for prompt resolution.',
			color: '#FFDF99',
			link: '/complaint',
		},
		{
			title: 'User Profile',
			subtitle:
				'Enables creation of personalized profiles for better communication.',
			color: '#C5C5FC',
			link: '/profile',
		},
		{
			title: 'Hostel/Mess Fee Payment',
			subtitle:
				'Facilitates online payment of hostel and mess fees for convenience.',
			color: '##FFDF99',
			link: '/payment',
		},
		{
			title: 'Feedback Mechanism',
			subtitle: 'Collects feedback from students to improve services.',
			color: '#FFAEC0',
			link: '/feedback',
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
						link={feature.link}
					/>
				))}
			</div>
		</Container>
	);
}
