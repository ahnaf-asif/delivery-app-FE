import { RouteType } from './Types';
import { Logout } from '@/Pages/Logout';

export const AuthRoutes: RouteType[] = [
	{
		path: '/logout',
		element: <Logout />
	}
];
