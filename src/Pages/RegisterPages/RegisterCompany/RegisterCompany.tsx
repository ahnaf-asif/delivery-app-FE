import React from 'react';
import { Box, Container, Center, Title } from '@mantine/core';

import { Layout } from '@/Layouts';
import { RegisterForm } from '@/Shared/Components';

const RegisterCompany = () => {
	return (
		<Layout hideBars>
			<Container mt={30}>
				<Center>
					<Title sx={{ textAlign: 'center' }} order={3}>
						Register as a Company Admin
					</Title>
				</Center>
				<Box mt={30}>
					<RegisterForm type="company" />
				</Box>
			</Container>
		</Layout>
	);
};

export default RegisterCompany;
