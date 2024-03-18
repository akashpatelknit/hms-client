import axios from 'axios';

export const getNotification = async () => {
	const response = await axios.get('http://localhost:3001/api/notification');
	return response.data;
};
