import { useState, useCallback } from "react";

export function useTimerWrap() {
  const [state, setState] = useState({ time: null });

  const setTime = useCallback(
    (time: string) => {
      setState({ ...state, time });
    },
    [state]
  );

  return { setTime };
}
