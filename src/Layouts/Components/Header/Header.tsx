import React from 'react';
import { Burger, Header as MantineHeader, MediaQuery, Title, useMantineTheme, Box } from '@mantine/core';

interface HeaderType {
	opened: boolean;
	toggleOpened: any;
}

const Header = ({ opened, toggleOpened }: HeaderType) => {
	const theme = useMantineTheme();
	return (
		<MantineHeader height={{ base: 50, md: 70 }} p="md">
			<Box style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
				<Box style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
					<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Burger opened={opened} onClick={toggleOpened} size="sm" color={theme.colors.gray[6]} mr="xl" />
					</MediaQuery>
					<Title order={3}>Delivery APP</Title>
				</Box>
			</Box>
		</MantineHeader>
	);
};

export default Header;
