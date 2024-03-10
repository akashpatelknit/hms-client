'use client';
import appwriteService from '@/appwrite/config';
import useAuth from '@/context/usAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProfileLayout = ({ children }) => {
	const [user, setUser] = useState(null);
	const { authStatus } = useAuth();
	const router = useRouter();
	if (!authStatus) {
		router.replace('/login');
		return <></>;
	}
	return <div>{children}</div>;
};

export default ProfileLayout;
