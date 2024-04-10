'use client';
import Footer from '@/components/footer';
import Loader from '@/components/loader/looader';
import Navbar from '@/components/navbar';
import { setUser } from '@/lib/slice/userSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProtectedLayout = ({ children }) => {
	const [isSuccess, setIsSuccess] = useState(false);
	const { push } = useRouter();
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			const { user, error, fetchedUser } = await getUser();
			setIsSuccess(true);
			// if (error) {
			// 	push('/login');
			// 	return;
			// }
			if (fetchedUser) {
				console.log('fetchedUser', fetchedUser);
				dispatch(setUser(fetchedUser));
			}
			setIsSuccess(true);
		})();
	}, [push]);

	if (!isSuccess) {
		return <Loader />;
	}
	return (
		<div className=" mx-auto">
			<main className="">
				<Navbar />
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default ProtectedLayout;

async function getUser() {
	try {
		const { data } = await axios.get('/api/auth/me');
		// console.log('data', data);
		return {
			user: data.user,
			fetchedUser: data.fetchedUser,
			error: null,
		};
	} catch (e) {
		const error = e;

		return {
			user: null,
			error,
			fetchedUser: null,
		};
	}
}
