import { ReactElement, ReactNode, Suspense, useCallback } from "react";
import { useQueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "components/";

interface Props {
  suspenseFallback: ReactNode;
  errorFallback: any;
  children: ReactElement;
}

const AsyncBoundary = ({
  suspenseFallback,
  errorFallback,
  children,
}: Props) => {
  const { reset } = useQueryErrorResetBoundary();
  const resetHandler = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <ErrorBoundary
      resetQuery={resetHandler}
      errorFallback={errorFallback}
      excludeSuspense={children}
    >
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
