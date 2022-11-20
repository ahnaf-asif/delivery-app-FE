import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingOverlay } from '@mantine/core';

import { useAppSelector } from '@/Redux/hooks';

export const RequireAdminAccess: FC<{ children: React.ReactNode }> = ({ children }) => {
	const navigate = useNavigate();
	const auth = useAppSelector(state => state.auth);

	useEffect(() => {
		if (auth.finishedDispatching) {
			if (!auth.user) {
				navigate('/login');
			}
			if (auth.user && auth.user.type !== 'admin') {
				navigate('/');
			}
		}
	}, [auth]);
	if (auth.finishedDispatching && auth.user && auth.user.type === 'admin') {
		return <>{children}</>;
	} else if (auth.loading) return <LoadingOverlay visible={true}></LoadingOverlay>;
	else return <></>;
};
