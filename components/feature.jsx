'use client';

import FeatureCard from './cards/features-card';

export default function Features() {
	return (
		<div className=" grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
			<FeatureCard />
			<FeatureCard />
			<FeatureCard />
			<FeatureCard />
			<FeatureCard />
			<FeatureCard />
			<FeatureCard />
		</div>
	);
}
