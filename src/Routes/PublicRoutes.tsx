import { RouteType } from './Types';

import Home from '@/Pages/Home';
import { RouteNotFound } from '@/Pages/RouteNotFound';
import { Register, RegisterCompany, RegisterCourier } from '@/Pages/RegisterPages';
import { Login } from '@/Pages/Login';

export const PublicRoutes: RouteType[] = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/register',
		element: <Register />
	},
	{
		path: '/register/company',
		element: <RegisterCompany />
	},
	{
		path: '/register/courier',
		element: <RegisterCourier />
	},
	{
		path: '/*',
		element: <RouteNotFound />
	}
];
