import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/Redux/hooks';
import { clearAuth } from '@/Redux/Slices/AuthSlice';
import { axios } from '@/Config';

const Logout = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(clearAuth());
		localStorage.removeItem('access_token');
		axios.defaults.headers.common['Authorization'] = '';
		navigate('/');
	}, []);
	return <></>;
};

export default Logout;
