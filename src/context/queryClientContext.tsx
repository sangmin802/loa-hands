import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

interface IQueryClientContext {
	children: ReactNode;
}

const QueryClientContext: React.FC<IQueryClientContext> = ({ children }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				useErrorBoundary: true,
				suspense: true,
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			{children}
		</QueryClientProvider>
	);
};

export default QueryClientContext;
