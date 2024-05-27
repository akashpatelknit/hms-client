'use client';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import useAuth from '@/context/usAuth';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ui/button';
import { deleteUser } from '@/lib/slice/userSlice';
import axios from 'axios';
import Image from 'next/image';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import useGetIsAllotment from '@/app/hooks/useIsAllotmentOpen';
import { Timer } from 'lucide-react';
import { Separator } from './ui/separator';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Team', href: '/about-us', current: true },
	{ name: 'About Project', href: '/project', current: true },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	const { user } = useSelector((state) => state.user);
	const { allotment } = useGetIsAllotment();
	// console.log('allotment', allotment[0]);
	const disaptch = useDispatch();
	const logOutHandler = () => {
		axios.post('/api/auth/logout').then(() => disaptch(deleteUser()));
	};
	return (
		<Disclosure as="nav" className=" border-b">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 ">
						<div className="relative flex h-20 items-center justify-between ">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex  w-full items-center justify-between ">
								<div className="flex flex-shrink-0 items-center h-5 ml-10 pl-3">
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
								{/* Desktop Nav */}
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4 items-center justify-center">
										{navigation.map((item) => (
											<Link
												href={item.href}
												key={item.name}
												className="font-medium  hover:text-gray-500"
											>
												{item.name}
											</Link>
										))}
										{allotment &&
											user &&
											allotment[0]?.isAllotmentOpen && (
												<Button
													asChild
													variant="outline"
												>
													<Link
														href="/allotment-form"
														className="font-medium  hover:text-gray-500 flex items-center justify-center gap-2"
													>
														Allotment
														<Timer className="h-5 w-5" />
													</Link>
												</Button>
											)}
									</div>
								</div>

								<div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									<button
										type="button"
										className="relative rounded-full mr-5  p-1 text-gray-400  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
									>
										<span className="absolute -inset-1.5" />
										<span className="sr-only">
											View notifications
										</span>
										<BellIcon
											className="h-8 w-8"
											aria-hidden="true"
										/>
									</button>
									{user ? (
										<DropdownMenu>
											<DropdownMenuTrigger>
												<Avatar>
													<AvatarImage
														src={user?.avatar}
													/>
													<AvatarFallback>
														CN
													</AvatarFallback>
												</Avatar>
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<DropdownMenuLabel>
													My Account
												</DropdownMenuLabel>
												<DropdownMenuSeparator />
												<DropdownMenuItem>
													<Link href="/profile">
														Profile
													</Link>
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={logOutHandler}
												>
													Sign Out
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									) : (
										<Button
											asChild
											className=" ml-5"
											variant="outline"
										>
											<Link href="/login">Login</Link>
										</Button>
									)}
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block rounded-md px-3 py-2 text-base font-medium'
									)}
									aria-current={
										item.current ? 'page' : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}

							{allotment &&
								user &&
								allotment[0]?.isAllotmentOpen && (
									<Disclosure.Button
										as="a"
										href="/allotment-form"
										className={classNames(
											true
												? 'bg-gray-900 text-white flex items-center  gap-5'
												: 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block rounded-md px-3 py-2 text-base font-medium'
										)}
										aria-current={true ? 'page' : undefined}
									>
										Allotment
										<Timer className="h-5 w-5" />
									</Disclosure.Button>
								)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
