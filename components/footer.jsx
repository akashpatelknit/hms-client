import React from 'react';
import { Separator } from './ui/separator';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
	return (
		<>
			<div>
				<Separator />
				<div className="flex flex-col  bg-[#FFF2EC]">
					<div className="w-full draggable">
						<div className="container flex flex-col mx-auto">
							<div className="flex flex-col items-center w-full my-10">
								<div className="flex flex-shrink-0 items-center h-5 ml-10 pl-3 mb-5">
									<Image
										src="/logo.png"
										height={40}
										width={40}
									/>
									<Separator
										orientation="vertical"
										className="w-[1.5px] h-[30px] bg-[#000] mx-2"
									/>
									<h1 className=" text-3xl font-semibold">
										HMS
									</h1>
								</div>
								<div className="flex flex-col items-center gap-6 mb-8">
									<div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
										<a
											href="/"
											className="text-gray-600 hover:text-gray-900"
										>
											Home
										</a>
										<a
											href="/about-us"
											className="text-gray-600 hover:text-gray-900"
										>
											Team
										</a>
										<a
											href="/project"
											className="text-gray-600 hover:text-gray-900"
										>
											About Project
										</a>
									</div>
									<div className="flex items-center gap-8">
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
								<div className="flex items-center">
									<p className="text-base font-normal leading-7 text-center text-grey-700">
										2024 HMS. All rights reserved.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
