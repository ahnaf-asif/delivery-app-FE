import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

import { store } from '@/Redux/store';
import { mantineTheme } from '@/Config';
import { AppRoutes } from '@/Routes';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</MantineProvider>
		</Provider>
	</React.StrictMode>
);
