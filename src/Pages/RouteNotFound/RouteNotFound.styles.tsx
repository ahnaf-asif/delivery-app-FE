import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Title, Text, Box, Button, Container } from '@mantine/core';

export const StyledCenteredDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

export const StyledLink = styled(Link)`
	font-size: 18px;
	text-decoration: none;
	color: darkblue;
	&:hover {
		color: #0074d9;
	}
`;
