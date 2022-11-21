import React from 'react';
import styled from '@emotion/styled';
import { Drawer, Navbar } from '@mantine/core';

export const StyledNavbar = styled(Navbar)`
	@media (max-width: 768px) {
		display: none;
	}
`;

export const StyledDrawer = styled(Drawer)`
	@media (min-width: 769px) {
		display: none;
	}
`;
