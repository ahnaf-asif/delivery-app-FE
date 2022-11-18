import { RouteType } from './Types';

import Home from '@/Pages/Home';
import { RouteNotFound } from '@/Pages';

export const PublicRoutes: RouteType[] = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/*',
		element: <RouteNotFound />
	}
];
