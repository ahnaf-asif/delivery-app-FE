import React from 'react';
import { RequireAdminAccess } from '@/Pages/AdminPages';

const AdminDashboard = () => {
	return (
		<RequireAdminAccess>
			<div>Hello world</div>
		</RequireAdminAccess>
	);
};

export default AdminDashboard;
