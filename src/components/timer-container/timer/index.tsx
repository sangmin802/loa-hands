import React from "react";
import { useTimer } from "hooks/use-timer";
import { useTimerType } from "hooks/use-timer-type";
import { Text, Image } from "components/";
import * as Styled from "./index.style";

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
    <Styled.Container borderColor={borderColor}>
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
          <Text type="subTitle">{contentAlert}</Text>
          <Text type="subTitle" color="timeOut">
            {timeOut}
          </Text>
        </Styled.Time>
      </Styled.Content>
      <Styled.Position>
        <Text type="desc">{pos}</Text>
      </Styled.Position>
    </Styled.Container>
  );
};

export default Timer;
