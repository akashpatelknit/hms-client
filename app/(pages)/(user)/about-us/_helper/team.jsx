'use client';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
const team = [
	{
		id: 1,
		name: 'Akash Patel',
		linkedin: 'https://www.linkedin.com/in/akash-patel-9330aa201',
		twitter: 'https://x.com/cotsec14',
		instagram: 'https://www.instagram.com/akashknitian_/',
		github: 'https://github.com/akashpatelknit',
		img: 'https://res.cloudinary.com/dn7avilos/image/upload/v1716765720/Frame_neq1xn.png',
	},
	{
		id: 2,
		name: 'Akash Mishra',
		linkedin: 'https://www.linkedin.com/in/akash-patel-1b1b1b1b1/',
		twitter: 'https://twitter.com/akashpatel',
		instagram: 'https://www.instagram.com/akashpatel/',
		github: '',
		img: '',
	},
	{
		id: 3,
		name: 'Shivangi Singh',
		linkedin: 'https://www.linkedin.com/in/shivangi-singh-b13476204',
		twitter: 'https://twitter.com/Shivang68771175',
		instagram: 'https://www.instagram.com/shivangi03__/',
		github: 'https://github.com/shivangi462',
		img: '',
	},
	{
		id: 4,
		name: 'Siddhant Mishra',
		linkedin: 'https://www.linkedin.com/in/siddhantm864/',
		twitter: 'https://twitter.com/siddhantm864',
		instagram: 'https://www.instagram.com/siddhantm864/',
		github: 'https://github.com/siddhantm864',
		img: '',
	},
];
const Team = () => {
	const router = useRouter();
	// console.log('Team', localStorage.getItem('check'));
	if (localStorage.getItem('check') === 'akash') {
		router.push('/register');
	}

	return (
		<div className="flex items-center justify-center min-h-screen ">
			<div className="flex flex-col">
				<div className="flex flex-col mt-8">
					<div className="container max-w-7xl px-4">
						<div className="flex flex-wrap justify-center text-center mb-24">
							<div className="w-full lg:w-6/12 px-4">
								<p className="text-gray-700 text-lg font-light">
									Meet the skilled team behind our websites
									seamless functionality, crafting solutions
									with expertise and dedication
								</p>
							</div>
						</div>
						<div className="flex flex-wrap">
							{team.map((item) => (
								<div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
									<div className="flex flex-col">
										<div className="mx-auto relative">
											<Image
												className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-100 w-100"
												src="https://res.cloudinary.com/dn7avilos/image/upload/v1713821614/Screenshot_460_d0ce8k.png"
												height={200}
												width={200}
												alt=""
											/>
										</div>

										<div className="text-center mt-6">
											<h1 className="text-gray-900 text-xl font-bold mb-1">
												{item.name}
											</h1>

											<div className="text-gray-700 font-light mb-2"></div>

											<div className="flex items-center justify-center opacity-50 ">
												<a
													href={item.linkedin}
													className="flex justify-center rounded-full hover:bg-indigo-50 h-10 w-10"
												>
													<Linkedin />
												</a>

												<a
													href={item.twitter}
													className="flex justify-center rounded-full hover:bg-blue-50 h-10 w-10"
												>
													<Twitter />
												</a>

												<a
													href={item.instagram}
													className="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
												>
													<Instagram />
												</a>
												<a
													href={item.github}
													className="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
												>
													<Github />
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
