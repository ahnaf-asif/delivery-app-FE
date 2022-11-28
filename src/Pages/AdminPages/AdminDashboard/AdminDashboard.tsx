import React from 'react';
import { Box } from '@mantine/core';

import { RequireAdminAccess } from '@/Pages/AdminPages';
import { Layout } from '@/Layouts';

const AdminDashboard = () => {
	return (
		<RequireAdminAccess>
			<Layout>
				<Box>Helo world</Box>
			</Layout>
		</RequireAdminAccess>
	);
};

export default AdminDashboard;
