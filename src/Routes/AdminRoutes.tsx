import { RouteType } from './Types';

import { AdminDashboard } from '@/Pages/AdminPages';

export const AdminRoutes: RouteType[] = [
	{
		path: '/admin',
		element: <AdminDashboard />
	}
];
