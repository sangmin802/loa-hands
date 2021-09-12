import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useTimer } from "hooks/use-timer";
import { useConditionalTimer } from "hooks/use-conditional-timer";
import { Text, Image } from "components/";
import { interval } from "utils/events/interval";
import * as Styled from "./index.style";

interface IData {
  name: string;
  src: string;
  lv: string;
  time: string;
  endTime: string;
  position: string;
  endPosition: string;
}

interface ITimer<T> {
  setTime: (T: string) => void;
  data?: T;
}

const Timer = ({ setTime, data }: PropsWithChildren<ITimer<IData>>) => {
  const { name, src, lv, time, endTime, position, endPosition } = data;
  const pos =
    typeof position !== "string" ? position[0] || endPosition : position;

  const [restTime, calcTimer, calcRestTimeProps] = useTimer();
  const [
    { borderColor, endTimeBg, contentAlert },
    calcConditionalRestTime,
    calcCloseTime,
    setTimerType,
  ] = useConditionalTimer(time, endTime, setTime);

  const timer = useCallback(
    time => {
      const now = new Date();
      const startTime = time[0] ?? null;
      const closeTime = calcCloseTime(startTime, now);
      const restTime = startTime ? calcTimer(closeTime) : null;
      const conditionalRestTime = calcConditionalRestTime(
        closeTime,
        now,
        restTime
      );
      conditionalRestTime !== null
        ? calcRestTimeProps(conditionalRestTime)
        : calcRestTimeProps(null);
    },
    [setTime]
  );

  const { startInterval, endInterval } = useMemo(() => interval(1, timer), [
    timer,
  ]);

  useEffect(() => {
    if (time.length) startInterval(time);
    if (!time.length) {
      setTimerType("END");
      setTime("종료");
    }

    return () => {
      endInterval();
    };
  }, [time, startInterval, endInterval, setTimerType]);

  return (
    <Styled.Container
      role="timer-border"
      data-border={borderColor}
      borderColor={borderColor}
    >
      <Styled.Background isShow={endTimeBg}></Styled.Background>
      <Styled.Title>
        <Text type="desc">{name}</Text>
      </Styled.Title>
      <Styled.Content>
        <Styled.TimerImg>
          <Image src={`${process.env.PUBLIC_URL}${src}`} />
          <Styled.Lv>
            <Text type="small">{lv}</Text>
          </Styled.Lv>
        </Styled.TimerImg>
        <Styled.Time>
          <Text type="subTitle" role="timer-alert">
            {contentAlert}
          </Text>
          <Text type="subTitle" role="timeout" color="timeOut">
            {restTime
              ? `${restTime.hour}:${restTime.min}:${restTime.sec}`
              : "종료"}
          </Text>
        </Styled.Time>
      </Styled.Content>
      <Styled.Position role="position">
        <Text type="desc">{pos}</Text>
      </Styled.Position>
    </Styled.Container>
  );
};

export default Timer;
