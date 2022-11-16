import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import { mantineTheme } from '@/Config';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
			<App />
		</MantineProvider>
	</React.StrictMode>
);
