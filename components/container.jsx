import React from 'react';

const Container = ({ children }) => {
	return (
		<div className=" max-w-7xl mx-auto px-5 py-4 md:px-10 lg:px-5">
			{children}
		</div>
	);
};

export default Container;
