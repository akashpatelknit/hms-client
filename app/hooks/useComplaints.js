import { getNotification } from '@/action/get-notification';
import { getComplaints } from '@/action/get-user';
import { useEffect, useState } from 'react';

const useComplaints = (id) => {
	const [complaints, setComplaints] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const fetchedNotification = await getComplaints(id);
				setComplaints(fetchedNotification.complaints);
			} catch (error) {
				console.error('Error fetching notification:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	return [complaints, loading];
};

export default useComplaints;
