'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Login from '@/components/Login';
import useAuth from '@/context/usAuth';

const LoginPage = () => {
	const router = useRouter();
	const { authStatus } = useAuth();

	if (authStatus) {
		router.replace('/');
		return <></>;
	}

	return (
		<section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
			<Login />
		</section>
	);
};

export default LoginPage;