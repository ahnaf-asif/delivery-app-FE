import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar as MantineNavbar, Box, Text } from '@mantine/core';
import { IconChevronRight, IconLogout, IconUser } from '@tabler/icons';

import { useAppSelector } from '@/Redux/hooks';
import {
	StyledDrawer,
	StyledDrawerProfile,
	StyledNavbar,
	StyledNavbarBox,
	StyledNavbarLink,
	StyledDrawerProfileBox
} from './Navbar.styles';
import {
	ADMIN_NAVBAR_LINKS,
	COMPANY_NAVBAR_LINKS,
	COURIER_NAVBAR_LINKS,
	GUEST_NAVBAR_LINKS
} from './NavbarConstants';

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
			: auth.user && auth.user.type === 'courier'
			? COURIER_NAVBAR_LINKS
			: GUEST_NAVBAR_LINKS;
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
				<MantineNavbar.Section grow>
					{NAVBAR_LINKS.map(({ path, title }, index) => (
						<StyledNavbarLink key={index} to={path} onClick={toggleOpened}>
							<StyledNavbarBox active={pathname.includes(path)}>
								<Text>{title}</Text>
							</StyledNavbarBox>
						</StyledNavbarLink>
					))}
				</MantineNavbar.Section>
				{auth.user && (
					<StyledDrawerProfile>
						<StyledNavbarLink to={'/profile'} onClick={toggleOpened}>
							<StyledDrawerProfileBox active={pathname.includes('/profile')}>
								<Box style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
									<IconUser size={20} />
									<Text>Profile</Text>
								</Box>
							</StyledDrawerProfileBox>
						</StyledNavbarLink>
						<StyledNavbarLink to={'/logout'} onClick={toggleOpened}>
							<StyledDrawerProfileBox active={pathname.includes('/logout')}>
								<Box style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
									<IconLogout size={20} />
									<Text>Logout</Text>
								</Box>
							</StyledDrawerProfileBox>
						</StyledNavbarLink>
					</StyledDrawerProfile>
				)}
			</StyledDrawer>
			{!hideBars && (
				<StyledNavbar p="md" hiddenBreakpoint="sm" width={{ sm: 150, lg: 250 }}>
					{NAVBAR_LINKS.map(({ path, title }, index) => (
						<StyledNavbarLink to={path} key={index}>
							<StyledNavbarBox active={pathname.includes(path)}>
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
