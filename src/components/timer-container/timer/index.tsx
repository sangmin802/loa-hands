import React from "react";
import { addZero } from "utility/utility";
import { useTimer } from "hooks/use-timer";

const Timer = props => {
  const { state } = useTimer(props);

  let { timeOut, targetState } = state;
  let { name, src, time, lv, position, endTime, contType, waiting } = props;
  let borderColor = null;
  let endTimeBg = null;

  switch (targetState) {
    // 섬 10분전
    case "APPEAR":
      borderColor = "#CC99FF";
      time = "일렁이는중";
      break;
    // 섬 등장
    // 그 외, 퀘스트 알림 등장
    case "OPEN":
      borderColor = "#FF6666";
      if (contType !== "FIELD_BOSS" && contType !== "CO_OCEAN") {
        time = "출현중";
      } else {
        time = "대기중";
      }
      break;
    // 모두 종료
    case "NORMAL":
      borderColor = null;
      break;
  }

  if (!time) {
    time = endTime;
    endTimeBg = "block";
    timeOut = "종료";
  }

  return (
    <div className="timer" style={{ borderColor: borderColor }}>
      <div style={{ display: endTimeBg }} className="end-time-bg"></div>
      <div className="name text-center overflow-dot">{name}</div>
      <div className="content">
        <div className="timer-img">
          <img src={`${process.env.PUBLIC_URL}${src}`} alt={name as string} />
          <div className="lv">{lv}</div>
        </div>
        <div className="time">
          <div className="start">{minusMin(time, waiting)}</div>
          <div className="time-out">{timeOut}</div>
        </div>
      </div>
      <div className="name text-center overflow-dot">{position}</div>
    </div>
  );
};

function minusMin(time, waiting) {
  if (time.includes(":")) {
    const [hour, min] = time.split(":");
    return `${addZero(Number(hour))}:${addZero(Number(min) - (waiting || 3))}`;
  }
  return time;
}

export default Timer;
