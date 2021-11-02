import { useState } from "react";

export function useTimer(): {
  restTime: null | { [key: string]: string };
  calcTimer: (T: number) => number;
  calcRestTimeProps: (T: number | null) => void;
} {
  const [restTime, setRestTimeProps] = useState<null | {
    [key: string]: string;
  }>(null);

  const calcTimer = (endTime: number) => {
    return Math.ceil((endTime - new Date().getTime()) / 1000) * 1000;
  };

  const calcRestTimeProps = (time: number | null): void => {
    if (time === null) return setRestTimeProps(null);

    const _sec = 1000;
    const _min = _sec * 60;
    const _hour = _min * 60;
    const hour = Math.floor(time / _hour);
    const min = Math.floor((time % _hour) / _min);
    const sec = Math.floor((time % _min) / _sec);

    setRestTimeProps({
      hour: addZero(hour),
      min: addZero(min),
      sec: addZero(sec),
    });
  };

  return { restTime, calcTimer, calcRestTimeProps };
}

function addZero(num: number) {
  if (num < 10) {
    return "0" + num;
  }
  return `${num}`;
}
