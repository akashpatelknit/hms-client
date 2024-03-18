'use client';
import Image from 'next/image';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import NotificationCard from './cards/notification-card';
import useNotification from '@/app/hooks/useNotification';
import { Button } from './ui/button';
import { BellIcon } from 'lucide-react';

const textColor = 'gray.700';

const Notification = () => {
	const [loading, notification] = useNotification();
	console.log(notification);
	return (
		<div className=" flex flex-col gap-3">
			<Card>
				<CardHeader className="pb-3">
					<CardTitle className="flex items-center justify-between">
						<p>Notifications</p>
					</CardTitle>
				</CardHeader>
				<CardContent className="grid gap-1">
					{notification.map((user, index) => (
						<div
							className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
							key={index}
						>
							<BellIcon className="h-10 w-10" />
							<div className="space-y-1">
								<p className="text-sm font-medium leading-none">
									{user?.title}
								</p>
								<p className="text-sm text-muted-foreground">
									{user?.description}
								</p>
							</div>
						</div>
					))}
				</CardContent>
			</Card>
		</div>
	);
};

export default Notification;
