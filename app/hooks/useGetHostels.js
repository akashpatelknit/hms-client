import axios from 'axios';
import { useEffect, useState } from 'react';
const url = `${process.env.NEXT_PUBLIC_API_URL}`;
const useGetHostels = (id) => {
	const [hostels, setHostels] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(`${url}/hostel`);
				// console.log('response', response.data);
				setHostels(response.data);
			} catch (error) {
				console.error('Error fetching complaints:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	return { hostels, loading };
};

export default useGetHostels;
