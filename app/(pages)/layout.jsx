import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const ProtectedLayout = ({ children }) => {
	return (
		<>
			<main className="">{children}</main>
		</>
	);
};

export default ProtectedLayout;
