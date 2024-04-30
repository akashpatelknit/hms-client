import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/providers/AuthProvider';
import { ClerkProvider } from '@clerk/nextjs';
import StoreProvider from './storeProvider';
import { Toaster } from 'sonner';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Hostel Management System',
	description: 'Hostel Management System for managing students and rooms.',
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				{/* <AuthProvider> */}
				<StoreProvider>
					<body className={inter.className}>
						{children}
						<Toaster position="top-center" />
					</body>
				</StoreProvider>
				{/* </AuthProvider> */}
			</html>
		</ClerkProvider>
	);
}
