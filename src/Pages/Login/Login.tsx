import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Center, Button, Container, Title, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

import { StyledPasswordInput, StyledTextInput } from './Login.styles';
import { emailRegexPattern } from '@/Shared/Utils';
import { Layout } from '@/Layouts';
import { loginUser } from '@/Redux/Slices/AuthSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';

const Login = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const auth = useAppSelector(state => state.auth);

	const loginForm = useForm({
		initialValues: {
			email: '',
			password: ''
		},
		validate: {
			email: inputEmail => (emailRegexPattern.test(inputEmail) ? null : 'Please enter a valid email'),
			password: inputPassword => (inputPassword.length >= 8 ? null : 'Password must be at least 8 characters')
		}
	});

	const submitLoginForm = async (loginFormData: { email: string; password: string }) => {
		dispatch(loginUser(loginFormData));
	};

	useEffect(() => {
		if (auth.error.includes('invalid')) {
			loginForm.setFieldError('email', 'Invalid Credentials');
			loginForm.setFieldError('password', 'Invalid Credentials');
		}
		if (auth.isAuthenticated) {
			navigate(`/`);
		}
	}, [auth]);

	return (
		<Layout hideBars>
			<Container mt={30}>
				<Center>
					<Title sx={{ textAlign: 'center' }} order={3}>
						Login
					</Title>
				</Center>
				<Box mt={30}>
					<Card p={30} shadow="xs">
						<form onSubmit={loginForm.onSubmit(values => submitLoginForm(values))}>
							<StyledTextInput {...loginForm.getInputProps('email')} id="login-email" label="Your Email" placeholder="Your Email " />
							<StyledPasswordInput {...loginForm.getInputProps('password')} id="login-password" label="Password" placeholder="password" />
							<Center mt={30}>
								<Button color="blue.9" type="submit">
									Login
								</Button>
							</Center>
						</form>
					</Card>
				</Box>
			</Container>
		</Layout>
	);
};

export default Login;
