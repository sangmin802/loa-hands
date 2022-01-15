import {
  DAILY_ISLAND,
  FIELD_BOSS,
  CHAOS_GATE,
  OCEAN_ACT,
  PHANTOM_SHIP,
} from "json/timer";
import { useCancelQuery } from "hooks/useCancelQuery";
import { useHomeRerender } from "hooks/useHomeRerender";
import { useTimerNotification } from "hooks/useTimerNotification";

import TimerList from "./timerList/timerList";
import LoadingSpinner from "components/common/loadingSpinner/loadingSpinner";
import AsyncBoundary from "components/common/asyncBoundary/asyncBoundary";
import ErrorFallback from "components/common/errorFallback/errorFallback";
import Calendar from "./calendar/calendar";
import Event from "./event/event";
import Text from "components/common/text/text";

import * as Styled from "./home.style";

function Home() {
  const { isMidnight, isSix } = useHomeRerender();
  const queryKey = [
    "fetchEventData",
    ["fetchCalendarData", isMidnight.getDate()],
  ];
  const yoil = isMidnight.getDay();
  const isWeek = 6 > yoil && yoil > 0;
  const notification = useTimerNotification();
  useCancelQuery(queryKey);

  return (
    <Styled.Home>
      <Styled.Notification onClick={notification.requestPermission}>
        <Text>타이머 알림 활성화</Text>
      </Styled.Notification>
      <Styled.Section
        title={<Styled.SectionTitle>진행중인 이벤트</Styled.SectionTitle>}
      >
        <AsyncBoundary
          suspenseFallback={<LoadingSpinner />}
          errorFallback={ErrorFallback}
        >
          <Event queryKey={queryKey[0] as string} />
        </AsyncBoundary>
      </Styled.Section>
      <Styled.Section
        title={
          <Styled.SectionTitle>
            오늘의 캘린더섬
            <Styled.SectionSmallTitle>
              {isWeek ? "11:00 ~ 23:00" : "09:00 ~ 23:00"}
            </Styled.SectionSmallTitle>
          </Styled.SectionTitle>
        }
      >
        <AsyncBoundary
          suspenseFallback={<LoadingSpinner />}
          errorFallback={ErrorFallback}
        >
          <Calendar
            queryKey={queryKey[1] as (string | number)[]}
            isMidnight={isMidnight}
            notification={notification.activeNotification}
            isWeek={isWeek}
          />
        </AsyncBoundary>
      </Styled.Section>
      <Styled.Section
        title={<Styled.SectionTitle>오늘의 모험섬</Styled.SectionTitle>}
      >
        <TimerList
          data={DAILY_ISLAND}
          notification={notification.activeNotification}
        />
      </Styled.Section>
      <Styled.Section
        title={<Styled.SectionTitle>오늘의 필드보스</Styled.SectionTitle>}
      >
        <TimerList
          data={FIELD_BOSS[isSix.getDay()]}
          rerenderKey={isSix}
          notification={notification.activeNotification}
        />
      </Styled.Section>
      <Styled.Section
        title={<Styled.SectionTitle>오늘의 카오스 게이트</Styled.SectionTitle>}
      >
        <TimerList
          data={CHAOS_GATE[isSix.getDay()]}
          rerenderKey={isSix}
          notification={notification.activeNotification}
        />
      </Styled.Section>
      <Styled.Section
        title={<Styled.SectionTitle>오늘의 유령선</Styled.SectionTitle>}
      >
        <TimerList
          data={PHANTOM_SHIP[isSix.getDay()]}
          rerenderKey={isSix}
          notification={notification.activeNotification}
        />
      </Styled.Section>
      <Styled.Section
        title={<Styled.SectionTitle>오늘의 항해</Styled.SectionTitle>}
      >
        <TimerList
          data={OCEAN_ACT[isSix.getDay()]}
          rerenderKey={isSix}
          notification={notification.activeNotification}
        />
      </Styled.Section>
    </Styled.Home>
  );
}

export default Home;
