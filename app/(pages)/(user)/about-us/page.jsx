import Image from 'next/image';
import Team from './_helper/team';

export function DemoTeamMembers() {
	return (
		<>
			<section className="w-full mx-auto">
				<div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
						<div className="max-w-lg">
							<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
								Crew of Visionaries
							</h2>
							<p className="mt-4 text-gray-600 text-lg">
								Discover the powerhouse of website development
								expertise rooted in Kamla Nehru Institute of
								Technology. Our team blends innovative minds,
								creative ideas, and unwavering dedication to
								craft digital solutions that redefine
								excellence. With a foundation in academic
								excellence and a passion for innovation, we
								bring your digital dreams to life with precision
								and flair.
							</p>
						</div>
						<div className="mt-12 md:mt-0 flex items-end justify-end">
							<Image
								src="/about.png"
								alt="About Us Image"
								className="object-cover "
								height={500}
								width={500}
							/>
						</div>
					</div>
				</div>
			</section>
			<Team />
		</>
	);
}

export default DemoTeamMembers;
