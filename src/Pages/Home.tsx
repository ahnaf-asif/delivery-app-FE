import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Layout } from '@/Layouts';
import { useAppSelector } from '@/Redux/hooks';

const Home = () => {
	const auth = useAppSelector(state => state.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.user && auth.user.type === 'admin') {
			navigate('/admin');
		}
		if (auth.user && auth.user.type === 'company') {
			navigate('/company');
		}
		if (auth.user && auth.user.type === 'courier') {
			navigate('/courier');
		}
	}, [auth]);
	return (
		<Layout hideBars>
			<div>
				Home Here <Link to={'/admin/dashboard'}> Admin Dashboard </Link>
			</div>
		</Layout>
	);
};

export default Home;
