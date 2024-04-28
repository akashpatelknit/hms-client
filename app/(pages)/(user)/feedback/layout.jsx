'use client';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const FeedbackLayout = ({ children }) => {
	const { user } = useSelector((state) => state.user);
	const { push } = useRouter();
	if (!user) {
		push('/login');
		return null;
	}
	return <div>{children}</div>;
};

export default FeedbackLayout;
