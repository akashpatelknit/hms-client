import React from 'react';
import './loader.css';
import { Divide } from 'lucide-react';
const Loader = () => {
	return (
		<div className=" flex items-center justify-center h-full w-full min-h-screen">
			<div className="newtons-cradle flex items-center justify-center h-full w-full">
				<div className="newtons-cradle__dot"></div>
				<div className="newtons-cradle__dot"></div>
				<div className="newtons-cradle__dot"></div>
				<div className="newtons-cradle__dot"></div>
			</div>
		</div>
	);
};

export default Loader;
