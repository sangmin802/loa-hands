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
      const additionalTime = 1000 * 60 * 60 * 24;
      const closeTime = new Date(
        year,
        month,
        date,
        hour,
        min * 1 + 3
      ).getTime(); // 종료 시간 = 시작시간+3
      let startTime = new Date(year, month, date, hour, min).getTime(); // 시작 시간
      let gap = Math.ceil((startTime - now.getTime()) / 1000) * 1000;
      let type = "NORMAL";

      // 이어질 타이머가 START 3분보다 이전임 -> 다음날 첫 타이머
      if (gap < -180000) {
        gap =
          Math.ceil((closeTime + additionalTime - now.getTime()) / 1000) * 1000;
      }

      // READY 10분
      if (0 <= gap && gap < 600000) type = "READY";

      // START 3분
      if (-180000 <= gap && gap < 0) {
        type = "START";
        gap = Math.ceil((closeTime - now.getTime()) / 1000) * 1000;
      }

      // 종료
      if (gap === 0) {
        setTime(time);
      } else {
        setState(type);
        return gap;
      }
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
        contentAlert: time[0] === "24:00" ? "00:00" : time[0],
      },
      END: {
        borderColor: "",
        endTimeBg: true,
        contentAlert: endTime,
      },
    }),
    [time, endTime]
  );

  const timerVariable = useMemo(() => timerVariables[timerType], [
    timerType,
    timerVariables,
  ]);

  return { timerVariable, calcTimer };
};
