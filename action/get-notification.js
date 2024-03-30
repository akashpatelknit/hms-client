import axios from 'axios';

const url = `${process.env.NEXT_PUBLIC_API_URL}`;
export const getNotification = async () => {
	const response = await axios.get(`${url}/notification`);
	return response.data;
};
