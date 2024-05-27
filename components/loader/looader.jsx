'use client';
import { PuffLoader } from 'react-spinners';

const Loader = () => {
	return (
		<div className="loader-container">
			<div className="loader-overlay"></div>
			<PuffLoader color="#ffffff" />
			<style jsx>{`
				.loader-container {
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 1000;
				}

				.loader-overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(
						0,
						0,
						0,
						0.5
					); /* Semi-transparent background */
					z-index: -1; /* Make sure the overlay is behind the loader */
				}

				.loader {
					z-index: 1; /* Make sure the loader is above the overlay */
				}
			`}</style>
		</div>
	);
};

export default Loader;
