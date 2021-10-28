import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Suspense,
} from "react";
import { useQueryErrorResetBoundary } from "react-query";
import ErrorBoundary from "components/errorBoundary";

interface IAsyncBoundary {
  suspenseFallback: ReactNode;
  errorFallback: ReactElement;
  keys?: any;
}

const AsyncBoundary = ({
  suspenseFallback,
  errorFallback,
  children,
  keys,
}: PropsWithChildren<IAsyncBoundary>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary resetQuery={reset} errorFallback={errorFallback} keys={keys}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
