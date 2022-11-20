import React from 'react';
import { Box, Container, Center, Title } from '@mantine/core';

import { Layout } from '@/Layouts';
import { RegisterForm } from '@/Shared/Components';

const RegisterCourier = () => {
	return (
		<Layout hideBars>
			<Container mt={30}>
				<Center>
					<Title sx={{ textAlign: 'center' }} order={3}>
						Register as a Courier
					</Title>
				</Center>
				<Box mt={30}>
					<RegisterForm type="courier" />
				</Box>
			</Container>
		</Layout>
	);
};

export default RegisterCourier;
