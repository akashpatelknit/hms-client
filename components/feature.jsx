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
			link: '/features/room-allotment',
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
			title: 'Library Table Booking',
			subtitle:
				'Provides instant notifications on room allotments and complaints.',
			color: '##FFDF99',
			link: '/library',
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
					Streamline Your Stay with Ease
				</h2>
				<p className="mt-4 text-gray-600 text-md">
					Simplify room management, fee payments, feedback collection, complaints, and profile updates with our hostel solution.
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
