import { Navbar as MantineNavbar, Box } from '@mantine/core';
import React from 'react';

import { StyledDrawer, StyledNavbar } from './Navbar.styles';

interface NavbarType {
	opened: boolean;
	toggleOpened: any;
	hideBars: boolean | undefined;
}

const Navbar = ({ opened, toggleOpened, hideBars }: NavbarType) => {
	return (
		<Box>
			<StyledDrawer opened={opened} onClose={toggleOpened} title="Register" padding="xl" size="xl">
				drawer content here
			</StyledDrawer>
			{!hideBars && (
				<StyledNavbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
					hello
				</StyledNavbar>
			)}
		</Box>
	);
};

export default Navbar;
