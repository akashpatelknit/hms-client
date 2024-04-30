import Container from '@/components/container';
import React from 'react';

const ProjectInfo = () => {
	return (
		<div className=' min-h-[70vh]'>
			<Container>
				<h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl text-center">
					Welcome to the Hostel Management System!
				</h2>
				<p className="mt-4 text-gray-600 text-md text-center w-[75%] m-auto">
					Our Hostel Management System (HMS) revolutionizes the way
					hostels operate by seamlessly integrating multiple features
					into a single, user-friendly platform. With automatic room
					allocation, students can say goodbye to the hassle of manual
					assignments, ensuring optimal utilization of hostel space.
					Fee payments become effortless through our streamlined
					process, enabling students to manage their finances
					conveniently. Additionally, our complaint registration
					system empowers students to voice their concerns
					efficiently, with built-in resolution features ensuring
					prompt action. Through our feedback mechanism, students can
					rate hostel services, fostering continuous improvement and
					enhancing overall satisfaction. Moreover, the user profile
					update feature allows students to maintain their information
					accurately and securely. Stay updated with the latest hostel
					news and announcements through our notification panel,
					keeping residents informed and engaged. With our HMS, hostel
					life becomes more manageable, efficient, and enjoyable,
					offering a comprehensive solution to address all
					hostel-related needs in one centralized platform.
				</p>
			</Container>
		</div>
	);
};

export default ProjectInfo;
