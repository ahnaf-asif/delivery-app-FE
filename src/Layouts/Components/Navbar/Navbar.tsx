import { Navbar as MantineNavbar } from '@mantine/core';
import React from 'react';

interface NavbarType {
	opened: boolean;
	toggleOpened: any;
}

const Navbar = ({ opened }: NavbarType) => {
	return (
		<MantineNavbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
			<MantineNavbar.Section>Logo and stuff</MantineNavbar.Section>
			<MantineNavbar.Section grow mt="md">
				Grow links
			</MantineNavbar.Section>
		</MantineNavbar>
	);
};

export default Navbar;
