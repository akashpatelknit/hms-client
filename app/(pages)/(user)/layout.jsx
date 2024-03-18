import React from 'react';

const ProtectedLayout = ({ children }) => {
	return (
		<div className=" mx-auto">
			<main className="">{children}</main>
		</div>
	);
};

export default ProtectedLayout;
