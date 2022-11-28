import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Drawer, Navbar } from '@mantine/core';

export const StyledNavbar = styled(Navbar)`
	padding: 0 !important;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const StyledDrawer = styled(Drawer)`
	.mantine-Drawer-title {
		font-size: 30px;
		font-weight: bolder;
		text-align: center;
		margin-bottom: 20px;
	}
	.mantine-Drawer-closeButton {
		scale: 1.5;
		margin-top: -15px;
	}
	@media (min-width: 769px) {
		display: none;
	}
`;

export const StyledNavbarBox = styled.div<{ active?: boolean }>`
	padding: 15px 10px;
	display: flex;
	justify-content: space-between;
	background: ${({ active }) => (active ? '#f5f5f5' : 'transparent')};
	&:hover {
		background-color: #f5f5f5;
	}
	@media (max-width: 768px) {
		background: transparent;
		font-weight: bold;
		color: ${({ active }) => (active ? '#0074d9' : 'black')};
		border-bottom: ${({ active }) => (active ? '1px solid #0074d9' : 'none')};
		&:hover {
			background: transparent;
		}
	}
`;

export const StyledNavbarLink = styled(Link)`
	color: black;
	text-decoration: none;
`;
