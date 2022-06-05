import { useRoutes } from 'react-router-dom';

import Home from '@/pages/home/home';
import FetchUserInfo from '@/pages/userInfo/fetchUserInfo/fetchUserInfo';

const Routes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/userInfo/:name',
			element: <FetchUserInfo />,
		},
	]);

	return routes;
};

export default Routes;
