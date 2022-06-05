import { ReactElement, ReactNode, Suspense } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';

import ErrorBoundary from '@/components/common/errorBoundary/errorBoundary';

export interface IAsyncBoundary {
	suspenseFallback: ReactElement;
	errorFallback: (...args: any[]) => ReactElement;
	children: ReactNode;
	keys?: any;
}

const AsyncBoundary = ({
	suspenseFallback,
	errorFallback,
	children,
	keys,
}: IAsyncBoundary) => {
	const { reset } = useQueryErrorResetBoundary();

	return (
		<ErrorBoundary
			resetQuery={reset}
			errorFallback={errorFallback}
			keys={keys}
		>
			<Suspense fallback={suspenseFallback}>{children}</Suspense>
		</ErrorBoundary>
	);
};

export default AsyncBoundary;
