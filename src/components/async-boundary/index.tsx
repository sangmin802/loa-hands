import { ReactNode, Suspense, useCallback, useState } from "react";
import { useQueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "components/";

interface Props {
  suspenseFallback: ReactNode;
  children: ReactNode;
}

const AsyncBoundary = ({ suspenseFallback, children }: Props) => {
  const [explode, setExplode] = useState(false);
  const { reset } = useQueryErrorResetBoundary();
  const resetHandler = useCallback(
    err => {
      reset();
      setExplode(err);
    },
    [setExplode, reset]
  );

  return (
    <ErrorBoundary resetKey={resetHandler} resetQuery={reset} keys={[explode]}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
