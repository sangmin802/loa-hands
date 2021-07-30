import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Suspense,
  useCallback,
} from "react";
import { useQueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "components/";

interface IAsyncBoundary {
  suspenseFallback: ReactNode;
  errorFallback: ReactElement;
  children: ReactElement;
}

const AsyncBoundary = ({
  suspenseFallback,
  errorFallback,
  children,
}: PropsWithChildren<IAsyncBoundary>) => {
  const { reset } = useQueryErrorResetBoundary();
  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <ErrorBoundary resetQuery={handleReset} errorFallback={errorFallback}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
