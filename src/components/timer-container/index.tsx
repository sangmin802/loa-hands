import React from "react";
import Timer from "./timer/index";
import { useNewTime } from "hooks/use-newtime";
import { Text } from "components/";
import * as Styled from "./index.style";

const TimerContainer = ({ data, today = null }) => {
  const { setTime } = useNewTime();

  // 배열 내 객체도 모두 복사
  const newData = [...data].map(obj => ({ ...obj }));
  // 렌더링 시, 현재 시간 이후의 시간들만 유지
  const validTimes = getValidTime(newData);

  newData.forEach((is, index) => {
    is.time = validTimes[index];
    // 위치가 하나일경우
    if (typeof is.position === "string") return;
    // 위치가 여러개인경우
    // 가능한 시간이 있다면 위치를 시간갯수만큼 반대에서부터 자르기
    if (validTimes[index].length !== 0)
      return (is.position = (is.position as string[]).slice(
        -validTimes[index].length
      ));
    // 가능한 시간이 없다면 남은위치 없음
    return (is.position = []);
  });

  // 가장 먼저 열리는 섬 순서대로 진열. 모든 시간 종료시, 맨 뒤로
  newData.sort((a, b) => {
    const time_a = a.time[0];
    const time_b = b.time[0];
    if (!time_b) return -1;
    if (time_a > time_b) return 1;
    if (time_a < time_b) return -1;
    return 0;
  });

  if (newData.length === 0)
    return (
      <Styled.Alert>
        <Text>다음에 만나요</Text>
      </Styled.Alert>
    );

  return (
    <Styled.Container
      role="timer-container"
      data-timers={JSON.stringify(newData)}
    >
      {newData.map((data, index) => (
        <Styled.Content key={`timer${index}`}>
          <Timer setTime={setTime} data={data} />
        </Styled.Content>
      ))}
    </Styled.Container>
  );
};

function getValidTime(newData) {
  const date = new Date();
  return newData
    .map(is => is.time)
    .map(group => {
      return (group as string[]).filter(time => {
        const newTime = time.replace(":", "");
        const min =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const now = String(date.getHours()) + String(min);
        if (Number(newTime) > Number(now) - 3) return time;
        return null;
      });
    });
}

export default React.memo(TimerContainer, (prev, next) => {
  // 자정이 되어서 변경된 homeDate로 Home이 다시 렌더링 될 때, Home에서 받아온 today 속성값의 변경으로 TimeWrap 다시 렌더링
  if (prev.today !== next.today) return false;
  return true;
});
