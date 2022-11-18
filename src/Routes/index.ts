import { useRoutes } from 'react-router-dom';

import { AdminRoutes } from './AdminRoutes';
import { CompanyRoutes } from './CompanyRoutes';
import { ShipperRoutes } from './ShipperRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = () => {
	return useRoutes([...AdminRoutes, ...CompanyRoutes, ...ShipperRoutes, ...PublicRoutes]);
};
