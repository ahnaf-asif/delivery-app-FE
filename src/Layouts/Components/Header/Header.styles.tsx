import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	margin-right: 10px;
	text-decoration: none;
	color: black;
	font-weight: bold;
	&:hover {
		color: darkblue;
	}
`;

export const StyledRightHeaderLinks = styled.div`
	@media (max-width: 760px) {
		display: none;
	}
`;
