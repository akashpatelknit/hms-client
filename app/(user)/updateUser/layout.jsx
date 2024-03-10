'use client';
import React from 'react';
import useAuth from '@/context/usAuth';
import { useRouter } from 'next/navigation';
const UpdateUserInfoLayout = ({ children }) => {
	const router = useRouter();
	const { authStatus } = useAuth();
	if (!authStatus) {
		router.replace('/login');
		return <></>;
	}
	return <div className=" max-w-7xl mx-auto px-5 md:px-0">{children}</div>;
};

export default UpdateUserInfoLayout;
