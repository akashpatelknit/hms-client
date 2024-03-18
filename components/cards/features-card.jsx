import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { MoveRight, RemoveFormattingIcon } from 'lucide-react';

const FeatureCard = ({ title, subtitle, color }) => {
	return (
		<div
			className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl border-l-8 border-1 border-[#FFDF99]"
			style={{ borderColor: `${color}` }}
		>
			<div className="p-6">
				<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
					{title}
				</h5>
				<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
					{subtitle}
				</p>
			</div>
			<div className="p-6 pt-0">
				<Link href="/complaint" className="">
					<MoveRight size={24} />
				</Link>
			</div>
		</div>
	);
};

export default FeatureCard;
