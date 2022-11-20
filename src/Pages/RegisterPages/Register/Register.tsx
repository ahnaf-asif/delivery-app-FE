import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Center, Text } from '@mantine/core';
import { IconHome, IconChevronRight, IconBike } from '@tabler/icons';

import { Layout } from '@/Layouts';
import { StyledCard, StyledCardInside, StyledCenteredDiv, StyledDivInside, StyledRegisterTitle } from './Register.styles';
import { useAppSelector } from '@/Redux/hooks';

const Register = () => {
	const navigate = useNavigate();
	const auth = useAppSelector(state => state.auth);

	const goToCompanyRegister = () => {
		navigate('/register/company');
	};
	const goToShipperRegister = () => {
		navigate('/register/courier');
	};

	useEffect(() => {
		if (auth.isAuthenticated) {
			navigate('/');
		}
	}, [auth]);

	return (
		<Layout hideBars>
			<Box>
				<StyledCenteredDiv>
					<StyledRegisterTitle>
						<Center>Register As</Center>
					</StyledRegisterTitle>
					<Box>
						<StyledDivInside>
							<StyledCard onClick={goToCompanyRegister}>
								<StyledCardInside>
									<Center>
										<IconHome size={80} />
									</Center>
									<Center mt={10}>
										<Text>Company Admin</Text>
										<IconChevronRight size={24} />
									</Center>
								</StyledCardInside>
							</StyledCard>
							<StyledCard onClick={goToShipperRegister}>
								<StyledCardInside>
									<Center>
										<IconBike size={80} />
									</Center>
									<Center mt={10}>
										<Text>Courier</Text>
										<IconChevronRight size={24} />
									</Center>
								</StyledCardInside>
							</StyledCard>
						</StyledDivInside>
					</Box>
				</StyledCenteredDiv>
			</Box>
		</Layout>
	);
};

export default Register;
