import axios from 'axios';

const url = `${process.env.NEXT_PUBLIC_API_URL}`;
export const getUser = async () => {
	const response = await axios.get(`${url}/user`);
	localStorage.setItem('user', JSON.stringify(response.data));
	return response.data;
};

export const getComplaints = async () => {
	const response = await axios.get(`${url}/complaint/user`);
	return response.data;
};
