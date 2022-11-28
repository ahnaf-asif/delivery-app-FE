import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { TextInput, PasswordInput } from '@mantine/core';

export const StyledTextInput = styled(TextInput)`
	margin-top: 20px;
	.mantine-TextInput-label {
		font-weight: bold;
	}
`;

export const StyledPasswordInput = styled(PasswordInput)`
	margin-top: 20px;
	.mantine-PasswordInput-label {
		font-weight: bold;
	}
`;

export const StyledLoginLink = styled(Link)`
	text-decoration: none;
	color: #0074d9;
`;
