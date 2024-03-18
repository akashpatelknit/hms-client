import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { File } from 'lucide-react';

const textColor = 'gray.700';

const NotificationCard = ({ data }) => {
	return (
		<Card className="flex items-center justify-center hover:bg-gray-100 cursor-pointer">
			<CardContent className=" flex items-center justify-center gap-3 p-2">
				<File size={50} />
				<p className=" flex items-center justify-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Doloremque culpa a modi inventore iste quos aperiam.
				</p>
			</CardContent>
		</Card>
	);
};

export default NotificationCard;
