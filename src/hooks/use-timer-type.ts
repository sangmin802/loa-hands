import { useState, useCallback, useMemo } from "react";

export const useTimerType = (time, endTime, setTime) => {
  const [timerType, setState] = useState("NORMAL");

  const calcTimer = useCallback(
    timeArr => {
      const time = timeArr[0] ?? null;
      if (!time) {
        setState("END");
        return null;
      }
      const now = new Date();
      const [hour, min] = time.split(":");
      const year = now.getFullYear();
      const month = now.getMonth();
      const date = now.getDate();
      const closeTime = new Date(year, month, date, hour, min * 1 + 3); // 종료 시간 = 시작시간+3
      const startTime = new Date(year, month, date, hour, min); // 시작 시간

      let gap = startTime.getTime() - now.getTime();
      let type = "NORMAL";

      if (gap <= 600000) type = "READY";
      if (gap === 0 || 0 > gap) {
        type = "START";
        gap = closeTime.getTime() - now.getTime();
      }

      if (gap === 0 || 0 > gap) {
        setTime(time);
        return null;
      }
      setState(type);
      return gap;
    },
    [setState, setTime]
  );

  const timerVariables = useMemo(
    () => ({
      READY: {
        borderColor: "#CC99FF",
        endTimeBg: false,
        contentAlert: "컨텐츠 준비중",
      },
      START: {
        borderColor: "#FF6666",
        endTimeBg: false,
        contentAlert: "컨텐츠 시작",
      },
      NORMAL: {
        borderColor: "",
        endTimeBg: false,
        contentAlert: time[0],
      },
      END: {
        borderColor: "",
        endTimeBg: true,
        contentAlert: endTime,
      },
    }),
    [time, endTime]
  );

  const timerVariable = useMemo(
    () => timerVariables[timerType],
    [timerType, timerVariables]
  );

  return { timerVariable, calcTimer };
};
