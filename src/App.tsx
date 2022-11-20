import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AppRoutes } from '@/Routes';
import { useAppDispatch } from '@/Redux/hooks';
import { getAuth } from '@/Redux/Slices/AuthSlice';

function App() {
	const location = useLocation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAuth());
	}, [location.pathname]);

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
