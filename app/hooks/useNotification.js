import { getNotification } from '@/action/get-notification';
import { useEffect, useState } from 'react';

const useNotification = () => {
	const [notification, setNotification] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const fetchedNotification = await getNotification();
				setNotification(fetchedNotification);
			} catch (error) {
				console.error('Error fetching notification:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return [loading, notification];
};

export default useNotification;
