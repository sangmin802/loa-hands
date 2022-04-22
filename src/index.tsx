// import "./style/fonts.css";
import '@/style/fonts.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { URL } from '@/constants/env';
import GlobalStyle, { THEME } from '@/globalStyle';
import App from '@/layout/app/app';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			useErrorBoundary: true,
			suspense: true,
			cacheTime: 1000 * 60 * 5,
			staleTime: 1000 * 60 * 3,
		},
	},
});

console.log(URL);

ReactDOM.render(
	<Router basename={URL}>
		<ThemeProvider theme={THEME}>
			{/* <React.StrictMode> */}
			<GlobalStyle />
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<App />
			</QueryClientProvider>
			{/* </React.StrictMode> */}
		</ThemeProvider>
	</Router>,
	document.getElementById('root'),
);
