import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AppRoutes } from '@/Routes';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { getAuth } from '@/Redux/Slices/AuthSlice';
import { LoadingOverlay } from '@mantine/core';

function App() {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const auth = useAppSelector(state => state.auth);

	useEffect(() => {
		dispatch(getAuth());
	}, [location.pathname]);

	if (auth.loading) return <LoadingOverlay visible={true}></LoadingOverlay>;

	return (
		<motion.div
			key={location.pathname}
			initial="pageInitial"
			animate="pageAnimate"
			variants={{
				pageInitial: {
					opacity: 0
				},
				pageAnimate: {
					opacity: 1,
					transition: {
						delay: 0.1
					}
				}
			}}
		>
			<AppRoutes />
		</motion.div>
	);
}

export default App;
