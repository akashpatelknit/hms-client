import axios from 'axios';
import { useEffect, useState } from 'react';
const url = `${process.env.NEXT_PUBLIC_API_URL}`;
const useGetRating = (id) => {
	const [rating, setRating] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(`${url}/feedback`);
				console.log('response', response.data);
				setRating(response.data);
			} catch (error) {
				console.error('Error fetching rating:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	return { rating, loading };
};

export default useGetRating;
