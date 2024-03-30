import { getNotification } from '@/action/get-notification';
import { getComplaints } from '@/action/get-user';
import { useEffect, useState } from 'react';

const useComplaints = () => {
	const [complaints, setComplaints] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const fetchedNotification = await getComplaints();
				setComplaints(fetchedNotification.complaints);
			} catch (error) {
				console.error('Error fetching notification:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	return [loading, complaints];
};

export default useComplaints;
