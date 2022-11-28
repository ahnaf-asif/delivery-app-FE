import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';

import { useAppSelector } from '@/Redux/hooks';
import { StyledDrawer, StyledNavbar, StyledNavbarBox, StyledNavbarLink } from './Navbar.styles';
import { ADMIN_NAVBAR_LINKS, COMPANY_NAVBAR_LINKS, COURIER_NAVBAR_LINKS } from './NavbarConstants';

interface NavbarType {
	opened: boolean;
	toggleOpened: any;
	hideBars: boolean | undefined;
}

const Navbar = ({ opened, toggleOpened, hideBars }: NavbarType) => {
	const auth = useAppSelector(state => state.auth);
	const NAVBAR_LINKS =
		auth.user && auth.user.type === 'admin'
			? ADMIN_NAVBAR_LINKS
			: auth.user && auth.user.type === 'company'
			? COMPANY_NAVBAR_LINKS
			: COURIER_NAVBAR_LINKS;
	const { pathname } = useLocation();
	return (
		<Box>
			<StyledDrawer
				opened={opened}
				onClose={toggleOpened}
				title="Delivery App"
				padding="xl"
				size="xl"
			>
				{NAVBAR_LINKS.map(({ path, title }, index) => (
					<StyledNavbarLink to={path} onClick={toggleOpened}>
						<StyledNavbarBox active={path === pathname} key={index}>
							<Text>{title}</Text>
						</StyledNavbarBox>
					</StyledNavbarLink>
				))}
			</StyledDrawer>
			{!hideBars && (
				<StyledNavbar p="md" hiddenBreakpoint="sm" width={{ sm: 150, lg: 250 }}>
					{NAVBAR_LINKS.map(({ path, title }, index) => (
						<StyledNavbarLink to={path}>
							<StyledNavbarBox active={path === pathname} key={index}>
								<Text>{title}</Text>
								<IconChevronRight />
							</StyledNavbarBox>
						</StyledNavbarLink>
					))}
				</StyledNavbar>
			)}
		</Box>
	);
};

export default Navbar;
