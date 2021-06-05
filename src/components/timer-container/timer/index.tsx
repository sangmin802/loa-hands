import React from "react";
import { useTimer } from "hooks/use-timer";
import { useTimerType } from "hooks/use-timer-type";

const Timer = ({ setTime, data }) => {
  const { name, src, lv, time, endTime, position, endPosition } = data;
  const pos =
    typeof position !== "string" ? position[0] || endPosition : position;

  const {
    timerVariable: { borderColor, contentAlert, endTimeBg },
    calcTimer,
  } = useTimerType(time, endTime, setTime);

  const timeOut = useTimer(time, calcTimer);

  return (
    <div className="timer" style={{ borderColor }}>
      <div style={{ display: endTimeBg }} className="end-time-bg"></div>
      <div className="name text-center overflow-dot">{name}</div>
      <div className="content">
        <div className="timer-img">
          <img src={`${process.env.PUBLIC_URL}${src}`} alt={name as string} />
          <div className="lv">{lv}</div>
        </div>
        <div className="time">
          <div className="start">{contentAlert}</div>
          <div className="time-out">{timeOut}</div>
        </div>
      </div>
      <div className="name text-center overflow-dot">{pos}</div>
    </div>
  );
};

export default Timer;
