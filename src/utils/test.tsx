import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { URL } from '@/constants/env';
import { THEME } from '@/globalStyle';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			suspense: true,
			useErrorBoundary: true,
			cacheTime: 1000 * 60 * 5,
			staleTime: 1000 * 60 * 3,
		},
	},
});

const AllProviders = ({ children }: { children: ReactElement }) => {
	return (
		<BrowserRouter basename={URL}>
			<ThemeProvider theme={THEME}>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools />
					{children}
				</QueryClientProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
};

const customRender = (ui: any, options?: any) =>
	render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
