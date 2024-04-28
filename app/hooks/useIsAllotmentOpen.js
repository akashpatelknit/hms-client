import axios from 'axios';
import { useEffect, useState } from 'react';
const url = `${process.env.NEXT_PUBLIC_API_URL}`;
const useGetIsAllotment = (id) => {
	const [allotment, setHostels] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(`${url}/open_allotment`);
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
	return { allotment, loading };
};

export default useGetIsAllotment;
