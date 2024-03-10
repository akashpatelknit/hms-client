'use client';

import PersonalInfoForm from '../_components/personal-info-form';
import AcademicInfoForm from '../_components/academic-info-form';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import appwriteService from '@/appwrite/config';
import appwriteUserService from '@/appwrite/user';

const ProfileForm = () => {
	const [user, setUser] = useState(null);
	const params = useParams();

	useEffect(() => {
		(async () => {
			const userdata = await appwriteUserService.getUser(params.id);
			setUser(userdata);
		})();
	}, []);
	console.log('user', user);
	return (
		<>
			<PersonalInfoForm user={user} />
			<AcademicInfoForm user={user} />
		</>
	);
};

export default ProfileForm;
