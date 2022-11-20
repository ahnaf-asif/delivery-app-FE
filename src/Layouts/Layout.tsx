import React, { FC, useState } from 'react';
import { AppShell } from '@mantine/core';

import { Navbar, Header, Footer } from './Components';

const Layout: FC<{ children: React.ReactNode; hideBars?: boolean }> = ({ children, hideBars }) => {
	const [opened, setOpened] = useState(false);

	const toggleOpened = () => {
		setOpened(!opened);
	};

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={<Navbar hideBars={hideBars} opened={opened} toggleOpened={toggleOpened} />}
			header={<Header opened={opened} toggleOpened={toggleOpened} />}
			footer={!hideBars ? <Footer /> : <></>}
		>
			{children}
		</AppShell>
	);
};
export default Layout;
