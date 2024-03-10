import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import NotificationCard from './cards/notification-card';

const textColor = 'gray.700';

const Notification = () => {
	return (
		<div className=" flex flex-col gap-3">
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
		</div>
	);
};

export default Notification;
