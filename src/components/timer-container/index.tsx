import React, { PropsWithChildren } from "react";
import { useNewTime } from "hooks/use-newtime";
import { Text, Timer } from "components/";
import * as Styled from "./index.style";

interface ITimerContainer {
  data: any[];
  rerenderKey?: null | Date;
  allTime?: boolean;
}

const TimerContainer = ({
  data,
  allTime = false,
}: PropsWithChildren<ITimerContainer>) => {
  const { setTime } = useNewTime();
  const date = new Date();
  const min =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const now = Number(String(date.getHours()) + String(min));

  const replacedData = data
    .map(d => {
      let cachedTime = [...d.time];
      let cachedPosition =
        typeof d.position !== "string" ? [...d.position] : d.position;

      while (Number(replaceColon(cachedTime[0])) + 3 <= now) {
        if (typeof d.position !== "string") cachedPosition.shift();
        cachedTime.shift();

        // 모든 시간이 현재시간보다 작다면, 자정지난 첫 컨텐츠로 실행
        if (!cachedTime.length && allTime) {
          cachedTime = [...d.time];
          cachedPosition =
            typeof d.position !== "string" ? [...d.position] : d.position;
          break;
        }
      }

      return {
        ...d,
        time: cachedTime,
        position: cachedPosition,
      };
    })
    .sort((a, b) => {
      // 종료시간이 현재시간보다 이전의 시간일 경우 내일의 시간이므로 +2400
      const time_a = beforeCurTime(replaceColon(a.time[0]), now);
      const time_b = beforeCurTime(replaceColon(b.time[0]), now);
      if (!time_b) return -1;
      if (time_a > time_b) return 1;
      if (time_a < time_b) return -1;
      return 0;
    });
  if (!replacedData.length)
    return (
      <Styled.Alert>
        <Text>다음에 만나요</Text>
      </Styled.Alert>
    );

  return (
    <Styled.Container role="timer-container">
      {replacedData.map((data, index) => (
        <Styled.Content key={`timer${index}`}>
          <Timer setTime={setTime} data={data} />
        </Styled.Content>
      ))}
    </Styled.Container>
  );
};

function replaceColon(string) {
  return Number(string?.replace(":", ""));
}

function beforeCurTime(time, now) {
  return time + 3 <= now ? (time += 2400) : time;
}

export default React.memo(TimerContainer, (prev, next) => {
  // 자정이 되어서 변경된 homeDate로 Home이 다시 렌더링 될 때, Home에서 받아온 rerenderKey 속성값의 변경으로 TimeWrap 다시 렌더링
  if (prev.rerenderKey !== next.rerenderKey) return false;
  return true;
});
