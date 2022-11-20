import React from 'react';
import styled from '@emotion/styled';
import { Drawer, Navbar } from '@mantine/core';

export const StyledNavbar = styled(Navbar)`
	@media (max-width: 760px) {
		display: none;
	}
`;

export const StyledDrawer = styled(Drawer)`
	@media (min-width: 761px) {
		display: none;
	}
`;
