import { useCallback, useMemo, useEffect, useState } from "react";
import { interval } from "utils/events/interval";

export function useHomeRerender() {
  const [isMidnight, setMidnight] = useState(new Date());
  const [isSix, setSix] = useState(new Date());

  const updateTime = useCallback(arr => {
    const [setMidnight, setSix] = arr;
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    if (hour === 0 && min === 0 && sec === 0) setMidnight(now);
    if (hour === 6 && min === 0 && sec === 0) setSix(now);
  }, []);

  const { startInterval, endInterval } = useMemo(
    () => interval(1, updateTime),
    [updateTime]
  );

  useEffect(() => {
    startInterval([setMidnight, setSix]);
    return () => {
      endInterval();
    };
  }, [endInterval, startInterval, setSix]);

  return { isMidnight, isSix };
}
