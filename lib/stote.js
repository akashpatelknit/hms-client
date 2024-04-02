import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			user: userSlice,
		},
	});
};
