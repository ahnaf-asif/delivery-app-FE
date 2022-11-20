import React from 'react';

import { Layout } from '@/Layouts';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Layout hideBars>
			<div>
				Home Here <Link to={'/admin/dashboard'}> Admin Dashboard </Link>
			</div>
		</Layout>
	);
};

export default Home;
