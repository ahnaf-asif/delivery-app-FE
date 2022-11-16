import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

import { store } from '@/Redux/store';
import { mantineTheme } from '@/Config';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
				<App />
			</MantineProvider>
		</Provider>
	</React.StrictMode>
);
