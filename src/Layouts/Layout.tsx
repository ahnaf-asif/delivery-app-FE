import React, { FC, useState } from 'react';
import { AppShell } from '@mantine/core';

import { Navbar, Header, Footer } from './Components';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	const [opened, setOpened] = useState(false);

	const toggleOpened = () => {
		setOpened(!opened);
	};

	const authenticated = true;

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={authenticated ? <Navbar opened={opened} toggleOpened={toggleOpened} /> : <></>}
			header={<Header opened={opened} toggleOpened={toggleOpened} />}
			footer={authenticated ? <Footer /> : <></>}
		>
			{children}
		</AppShell>
	);
};
export default Layout;
