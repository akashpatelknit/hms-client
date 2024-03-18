import App from './App';
import connectDB from '../db/db';

function MyApp({ Component, pageProps }) {
	// Call connectDB before rendering the App component
	connectDB();

	return <Component {...pageProps} />;
}

export default MyApp;
