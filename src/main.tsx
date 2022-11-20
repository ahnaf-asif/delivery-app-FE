import React from 'react';
import { BrowserRouter, useLocation, Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { motion } from 'framer-motion';

import { store } from '@/Redux/store';
import { mantineTheme } from '@/Config';
import { AppRoutes } from '@/Routes';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
			<React.StrictMode>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</React.StrictMode>
		</MantineProvider>
	</Provider>
);
