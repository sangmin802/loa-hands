import React, { useCallback, useEffect, useMemo } from "react";
import { useTimer } from "hooks/useTimer";
import { useConditionalTimer } from "hooks/useConditionalTimer";
import { animationFrame } from "utils/events/requestAnimationFrame";
import Text from "components/text/text";
import Image from "components/image/image";
import * as Styled from "./timerItem.style";

export interface TimerProps {
  data: {
    name: string;
    src: string;
    lv: string;
    time: string[];
    endTime: string;
    position: string;
    endPosition: string;
  };
  dispatcher: {
    setTime: (T: number | string) => void;
    notification: (...args: any[]) => void;
  };
}

function TimerItem({ data, dispatcher, ...props }: TimerProps) {
  const { setTime, notification } = dispatcher;
  const { name, src, lv, time, endTime, position, endPosition } = data;
  const pos =
    typeof position !== "string" ? position[0] || endPosition : position;

  const { restTime, calcTimer, calcRestTimeProps } = useTimer();
  const {
    timerTypeConts: { borderColor, endTimeBg, contentAlert },
    calcConditionalRestTime,
    calcCloseTime,
    setTimerType,
    timerType,
  } = useConditionalTimer(time, endTime, setTime);

  const timer = useCallback(time => {
    const now = new Date();
    const startTime = time[0];
    const closeTime = calcCloseTime(startTime, now);
    const restTime = calcTimer(closeTime);
    const conditionalRestTime = calcConditionalRestTime(
      closeTime,
      now,
      restTime
    );
    calcRestTimeProps(conditionalRestTime);
  }, []);

  const { start, cancel } = useMemo(() => animationFrame(1000, timer), []);

  useEffect(() => {
    if (time.length) start(time);
    if (!time.length) setTimerType("END");

    return () => {
      cancel();
    };
  }, [time]);

  useEffect(() => {
    if (timerType === "END") calcRestTimeProps(null);
  }, [timerType]);

  useEffect(() => {
    if (timerType === "READY") notification({ name, type: "READY" });
    if (timerType === "START") notification({ name, type: "START" });
  }, [name, notification, timerType]);

  return (
    <Styled.Timer
      {...props}
      role="timer-border"
      data-border={borderColor}
      borderColor={borderColor}
    >
      <Styled.Background isShow={endTimeBg} />
      <Styled.TimerTitle size="0.9">{name}</Styled.TimerTitle>
      <Styled.Content>
        <Styled.TimerImg>
          <Image src={`${process.env.PUBLIC_URL}${src}`} />
          <Styled.TimerLv size="0.7">{lv}</Styled.TimerLv>
        </Styled.TimerImg>
        <Styled.Time>
          <Text size="0.9" role="timer-alert">
            {contentAlert}
          </Text>
          <Text size="0.9" role="timeout" color="timeOut">
            {restTime
              ? `${restTime.hour}:${restTime.min}:${restTime.sec}`
              : "종료"}
          </Text>
        </Styled.Time>
      </Styled.Content>
      <Styled.TimerPosition size="0.9">{pos}</Styled.TimerPosition>
    </Styled.Timer>
  );
}

export default TimerItem;
