'use client';
import appwriteService from '@/appwrite/config';
import Navbar from '@/components/navbar';

import { AuthProvider } from '@/context/authContext';
import React, { useEffect, useState } from 'react';

const ProtectedLayout = ({ children }) => {
	const [authStatus, setAuthStatus] = useState(false);
	const [user, setUser] = useState(null);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		appwriteService
			.isLoggedIn()
			.then(setAuthStatus)
			.finally(() => setLoader(false));

		appwriteService.getCurrentUser().then((data) => setUser(data));
	}, []);
	return (
		<AuthProvider value={{ authStatus, setAuthStatus, user }}>
			{!loader && (
				<div className=" max-w-7xl mx-auto">
					<Navbar />
					<main className="px-2 py-4">{children}</main>
				</div>
			)}
		</AuthProvider>
	);
};

export default ProtectedLayout;
