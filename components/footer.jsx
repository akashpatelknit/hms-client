import React from 'react';
import { Separator } from './ui/separator';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
	return (
		<>
			<div>
				<Separator />
				<div className="flex flex-col mx-3 ">
					<div className="w-full draggable">
						<div className="container flex flex-col mx-auto">
							<div className="flex flex-col items-center w-full my-10">
								<span className="mb-8">HMS</span>
								<div className="flex flex-col items-center gap-6 mb-8">
									<div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
										<a
											href="javascript:void(0)"
											className="text-gray-600 hover:text-gray-900"
										>
											About
										</a>
										<a
											href="javascript:void(0)"
											className="text-gray-600 hover:text-gray-900"
										>
											Features
										</a>
										<a
											href="javascript:void(0)"
											className="text-gray-600 hover:text-gray-900"
										>
											Blog
										</a>
										<a
											href="javascript:void(0)"
											className="text-gray-600 hover:text-gray-900"
										>
											Resources
										</a>
										<a
											href="javascript:void(0)"
											className="text-gray-600 hover:text-gray-900"
										>
											Partners
										</a>
										<a
											href="javascript:void(0)"
											className="text-gray-600 hover:text-gray-900"
										>
											Help
										</a>
										<a
											href="javascript:void(0)"
											className="text-gray-600 hover:text-gray-900"
										>
											Terms
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
										2023 Motion Tailwind CSS Library. All
										rights reserved.
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
