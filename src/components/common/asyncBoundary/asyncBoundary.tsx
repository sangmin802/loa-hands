import React, { PropsWithChildren, ReactElement, Suspense } from "react";
import { useQueryErrorResetBoundary } from "react-query";
import ErrorBoundary from "components/errorBoundary/errorBoundary";

export interface AsyncBoundaryProps {
  suspenseFallback: ReactElement;
  errorFallback: (...args: any[]) => ReactElement;
  keys?: any;
}

function AsyncBoundary({
  suspenseFallback,
  errorFallback,
  children,
  keys,
}: PropsWithChildren<AsyncBoundaryProps>) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary resetQuery={reset} errorFallback={errorFallback} keys={keys}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
