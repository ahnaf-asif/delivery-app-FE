import React, { useEffect } from 'react';
import {
	Burger,
	Header as MantineHeader,
	MediaQuery,
	Title,
	useMantineTheme,
	Box,
	Menu,
	Text
} from '@mantine/core';
import { IconUser, IconChevronDown, IconLogout, IconChevronRight } from '@tabler/icons';

import {
	StyledHeaderDropdown,
	StyledHeaderDropdownLink,
	StyledLink,
	StyledRightHeaderLinks
} from './Header.styles';
import { useAppSelector } from '@/Redux/hooks';

interface HeaderType {
	opened: boolean;
	toggleOpened: any;
}

const Header = ({ opened, toggleOpened }: HeaderType) => {
	const theme = useMantineTheme();
	const auth = useAppSelector(state => state.auth);

	return (
		<MantineHeader height={{ base: 50, md: 70 }} p="md">
			<Box
				style={{
					display: 'flex',
					alignItems: 'center',
					height: '100%',
					justifyContent: 'space-between'
				}}
			>
				<Box
					style={{
						display: 'flex',
						alignItems: 'center',
						height: '100%',
						justifyContent: 'center'
					}}
				>
					<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Burger
							opened={opened}
							onClick={toggleOpened}
							size="sm"
							color={theme.colors.gray[6]}
							mr="xl"
						/>
					</MediaQuery>
					<Box>
						<StyledLink to="/" style={{ display: 'flex' }}>
							<Title order={3}>Delivery APP</Title>
						</StyledLink>
					</Box>
				</Box>
				<StyledRightHeaderLinks>
					{auth.isAuthenticated && (
						<Menu width="auto">
							<Menu.Target>
								<StyledHeaderDropdown>
									<Text>{auth.user && auth.user.name}</Text>
									<IconChevronDown size={18} />
								</StyledHeaderDropdown>
							</Menu.Target>
							<Menu.Dropdown>
								<StyledHeaderDropdownLink to="/profile">
									<Menu.Item icon={<IconUser />}>Profile</Menu.Item>
								</StyledHeaderDropdownLink>
								<StyledHeaderDropdownLink to="/logout">
									<Menu.Item icon={<IconLogout />}>Logout</Menu.Item>
								</StyledHeaderDropdownLink>
							</Menu.Dropdown>
						</Menu>
					)}
					{!auth.isAuthenticated && (
						<>
							<StyledLink to="/register">Register</StyledLink>
							<StyledLink to="/login">Login</StyledLink>
						</>
					)}
				</StyledRightHeaderLinks>
			</Box>
		</MantineHeader>
	);
};

export default Header;
