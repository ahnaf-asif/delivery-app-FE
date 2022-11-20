import React, { useEffect } from 'react';
import { Burger, Header as MantineHeader, MediaQuery, Title, useMantineTheme, Box } from '@mantine/core';

import { StyledLink, StyledRightHeaderLinks } from './Header.styles';
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
			<Box style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
				<Box style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
					<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Burger opened={opened} onClick={toggleOpened} size="sm" color={theme.colors.gray[6]} mr="xl" />
					</MediaQuery>
					<StyledLink to="/">
						<Title order={3}>Delivery APP</Title>
					</StyledLink>
				</Box>
				{auth.isAuthenticated ? (
					<StyledRightHeaderLinks>
						<StyledLink to="/logout">Logout</StyledLink>
					</StyledRightHeaderLinks>
				) : (
					<StyledRightHeaderLinks>
						<StyledLink to="/register">Register</StyledLink>
						<StyledLink to="/login">Login</StyledLink>
					</StyledRightHeaderLinks>
				)}
			</Box>
		</MantineHeader>
	);
};

export default Header;
