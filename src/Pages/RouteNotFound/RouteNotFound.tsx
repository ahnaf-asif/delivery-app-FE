import React from 'react';
import { Box, Center } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';

import { StyledCenteredDiv, StyledLink } from './RouteNotFound.styles';
import notFoundJpeg from './notFound.jpeg';

const RouteNotFound = () => {
	return (
		<StyledCenteredDiv>
			<Box>
				<Box>
					<img width="100%" src={notFoundJpeg} alt="404 Not Found" />
				</Box>
				<Center>
					<StyledLink to="/">
						<Center>
							<IconArrowLeft />
							Go Back To Home Page
						</Center>
					</StyledLink>
				</Center>
			</Box>
		</StyledCenteredDiv>
	);
};

export default RouteNotFound;
