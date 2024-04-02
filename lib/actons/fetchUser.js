import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUserData = createAsyncThunk(
	'user/fetchUserData',
	async (id, { extra }) => {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`
		);
		return response.data;
	}
);

export default fetchUserData;
