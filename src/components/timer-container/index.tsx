import React, { PropsWithChildren } from "react";
import { useNewTime } from "hooks/use-newtime";
import { Text, Timer } from "components/";
import * as Styled from "./index.style";

interface ITimerContainer {
  data: any[];
  rerenderKey?: null | Date;
}

const TimerContainer = ({
  data,
  rerenderKey,
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
      // 앞에서부터 종료된 시간은 제거
      // 0500종료되는 컨텐츠 만약 모두 작다면, 0000~0500으로 시간대 설정하고 종료하도록 해보기
      while (Number(replaceColon(cachedTime[0])) + 3 <= now) {
        if (typeof d.position !== "string") cachedPosition.shift();
        cachedTime.shift();

        // 모든 시간이 현재시간보다 작다면, 자정지난 첫 컨텐츠로 실행
        // 실제로 종료된 오전시간컨텐츠도 다시실행시켜버림
        if (!cachedTime.length && !rerenderKey) {
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

      if (time_b === null) return -1;
      if (time_a > time_b) return 1;
      if (time_a < time_b) return -1;

      return 0;
    });

  console.log(replacedData);
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
  // 리셋타임은 5시
  if (prev.rerenderKey !== next.rerenderKey) return false;
  return true;
});
