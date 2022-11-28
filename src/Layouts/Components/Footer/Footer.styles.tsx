import React from 'react';
import styled from '@emotion/styled';
import { Footer } from '@mantine/core';

export const StyledMantineFooter = styled(Footer)`
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		display: none;
	}
`;
