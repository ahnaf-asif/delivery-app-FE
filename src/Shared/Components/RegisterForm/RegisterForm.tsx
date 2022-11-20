import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Center, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { getAuth, registerUser } from '@/Redux/Slices/AuthSlice';
import { emailRegexPattern, phoneRegexPattern } from '@/Shared/Utils';
import { RegisterFormProps, RegisterFormType } from './RegisterFormTypes';
import { StyledPasswordInput, StyledTextInput } from './RegisterForm.styles';

const RegisterForm = ({ type }: RegisterFormProps) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const auth = useAppSelector(state => {
		return state.auth;
	});

	const initialRegisterFormValues: RegisterFormType = {
		name: '',
		email: '',
		phone: '',
		password: ''
	};
	const registerForm = useForm({
		initialValues: initialRegisterFormValues,
		validate: {
			name: value => (value.trim() ? null : 'Please enter a name'),
			email: value => (emailRegexPattern.test(value) ? null : 'Please enter a valid email'),
			phone: value => (phoneRegexPattern.test(value) ? null : 'Please enter a valid phone number'),
			password: value => (value.length >= 8 ? null : 'Password must be atleast 8 letters long')
		}
	});
	const submitRegisterForm = async (formData: RegisterFormType) => {
		dispatch(registerUser({ ...formData, type: type }));
	};
	useEffect(() => {
		if (auth.error.includes('email')) {
			registerForm.setFieldError('email', 'This email account is already used');
		} else if (auth.error.includes('phone')) {
			registerForm.setFieldError('phone', 'This phone number is already used');
		}
		if (auth.isAuthenticated) {
			navigate(`/profile/${type}`);
		}
	}, [auth]);

	return (
		<Card p={30} shadow="xs">
			<form onSubmit={registerForm.onSubmit(values => submitRegisterForm(values))}>
				<StyledTextInput {...registerForm.getInputProps('name')} id="register-name" label="Your Name" placeholder="Your Name " />
				<StyledTextInput {...registerForm.getInputProps('email')} id="register-email" label="Your Email" placeholder="Your Email " />
				<StyledTextInput {...registerForm.getInputProps('phone')} id="register-phone" label="Your Phone" placeholder="Your Phone " />
				<StyledPasswordInput {...registerForm.getInputProps('password')} id="register-password" label="Password" placeholder="password" />
				<Center mt={30}>
					<Button color="blue.9" type="submit">
						Register
					</Button>
				</Center>
			</form>
		</Card>
	);
};

export default RegisterForm;
