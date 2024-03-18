'use client';
import appwriteService from '@/appwrite/config';
import useAuth from '@/context/usAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProfileLayout = ({ children }) => {
	return <div>{children}</div>;
};

export default ProfileLayout;
