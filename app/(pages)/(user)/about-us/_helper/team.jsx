'use client';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Team = () => {
	const router = useRouter();
	console.log('Team', localStorage.getItem('check'));
	if (localStorage.getItem('check') === 'akash') {
		router.push('/register');
	}

	return (
		<div class="flex items-center justify-center min-h-screen ">
			<div class="flex flex-col">
				<div class="flex flex-col mt-8">
					<div class="container max-w-7xl px-4">
						<div class="flex flex-wrap justify-center text-center mb-24">
							<div class="w-full lg:w-6/12 px-4">
								{/* <h1 class="text-gray-900 text-4xl font-bold mb-8">
									Crew of Visionaries
								</h1> */}

								<p class="text-gray-700 text-lg font-light">
									Meet the skilled team behind our websites seamless functionality, crafting solutions with expertise and dedication
								</p>
							</div>
						</div>
						<div class="flex flex-wrap">
							<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
								<div class="flex flex-col">
									<a href="#" class="mx-auto relative">
										<Image
											class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-100 w-100"
											src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
											height={200}
											width={200}
											alt=''
										/>
									</a>

									<div class="text-center mt-6">
										<h1 class="text-gray-900 text-xl font-bold mb-1">
											Tranter Jaskulski
										</h1>

										<div class="text-gray-700 font-light mb-2">
											Founder & Specialist
										</div>

										<div class="flex items-center justify-center opacity-50 ">
											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-indigo-50 h-10 w-10"
											>
												<Linkedin />
											</a>

											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-blue-50 h-10 w-10"
											>
												<Twitter />
											</a>

											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
											>
												<Instagram />
											</a>
											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
											>
												<Github />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
								<div class="flex flex-col">
									<a href="#" class="mx-auto relative">
										<Image
											class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-100 w-100"
											src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
											height={200}
											width={200}
										/>
									</a>

									<div class="text-center mt-6">
										<h1 class="text-gray-900 text-xl font-bold mb-1">
											Tranter Jaskulski
										</h1>

										<div class="text-gray-700 font-light mb-2">
											Founder & Specialist
										</div>

										<div class="flex items-center justify-center opacity-50 ">
											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-indigo-50 h-10 w-10"
											>
												<Linkedin />
											</a>

											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-blue-50 h-10 w-10"
											>
												<Twitter />
											</a>

											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
											>
												<Instagram />
											</a>
											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
											>
												<Github />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
								<div class="flex flex-col">
									<a href="#" class="mx-auto relative">
										<Image
											class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-100 w-100"
											src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
											height={200}
											width={200}
										/>
									</a>

									<div class="text-center mt-6">
										<h1 class="text-gray-900 text-xl font-bold mb-1">
											Tranter Jaskulski
										</h1>

										<div class="text-gray-700 font-light mb-2">
											Founder & Specialist
										</div>

										<div class="flex items-center justify-center opacity-50 ">
											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-indigo-50 h-10 w-10"
											>
												<Linkedin />
											</a>

											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-blue-50 h-10 w-10"
											>
												<Twitter />
											</a>

											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
											>
												<Instagram />
											</a>
											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
											>
												<Github />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
								<div class="flex flex-col">
									<a href="#" class="mx-auto relative">
										<Image
											class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-100 w-100"
											src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
											height={200}
											width={200}
										/>
									</a>

									<div class="text-center mt-6">
										<h1 class="text-gray-900 text-xl font-bold mb-1">
											Tranter Jaskulski
										</h1>

										<div class="text-gray-700 font-light mb-2">
											Founder & Specialist
										</div>

										<div class="flex items-center justify-center opacity-50 ">
											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-indigo-50 h-10 w-10"
											>
												<Linkedin />
											</a>

											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-blue-50 h-10 w-10"
											>
												<Twitter />
											</a>

											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
											>
												<Instagram />
											</a>
											<a
												href="#"
												class="flex justify-center rounded-full hover:bg-orange-50 h-10 w-10"
											>
												<Github />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
