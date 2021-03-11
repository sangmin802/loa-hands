import React from "react";
import _ from "utility";
import { CalcTimer } from "hooks/timer";

// 타입
import { IJson } from "types/home";

import "./index.css";

interface Props extends IJson {
  setTime(p1: string): void;
}

const Index: React.FC<Props> = props => {
  const { state } = CalcTimer(props);

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
      <div style={{ display: endTimeBg }} className="endTimeBg"></div>
      <div className="timerName rem09 textCenter overflowDot">{name}</div>
      <div className="timerContent">
        <div className="timerImg">
          <img
            className="imgWidth"
            src={`https://github.com/sangmin802/loa-hands/blob/master/public/${src}?raw=true`}
            alt={name as string}
          />
          <div className="timerLv rem07">{lv}</div>
        </div>
        <div className="timerTime">
          <div className="startTime rem08">{minusMin(time, waiting)}</div>
          <div className="timeOut rem08">{timeOut}</div>
        </div>
      </div>
      <div className="timerName rem09 textCenter overflowDot">{position}</div>
    </div>
  );
};

function minusMin(time, waiting) {
  if (time.includes(":")) {
    const [hour, min] = time.split(":");
    return `${_.addZero(Number(hour))}:${_.addZero(
      Number(min) - (waiting || 3)
    )}`;
  }
  return time;
}

export default Index;
