import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const ProtectedLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="">{children}</main>
			<Footer />
		</>
	);
};

export default ProtectedLayout;
