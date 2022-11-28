import React from 'react';
import { Box } from '@mantine/core';

import { RequireAdminAccess } from '@/Shared/Components/Guards';
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
