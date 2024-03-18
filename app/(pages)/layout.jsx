'use client';
import appwriteService from '@/appwrite/config';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import { AuthProvider } from '@/context/authContext';
import React, { useEffect, useState } from 'react';

const ProtectedLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="">{children}</main>
			<Footer />
		</>
	);
};

export default ProtectedLayout;
