import React from 'react';
import { Box } from '@mantine/core';

import { StyledMantineFooter } from './Footer.styles';

const Footer = () => {
	const { innerWidth } = window;
	return <Box>{innerWidth <= 768 && <StyledMantineFooter height={60}>footer</StyledMantineFooter>}</Box>;
};

export default Footer;
