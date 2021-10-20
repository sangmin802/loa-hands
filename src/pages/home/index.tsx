import React, { useMemo } from "react";
import {
  DAILY_ISLAND,
  FIELD_BOSS,
  CHAOS_GATE,
  OCEAN_ACT,
  PHANTOM_SHIP,
} from "json/timer";
import { useCalendar } from "hooks/use-calendar";
import { useEvent } from "hooks/use-event";
import { useCancelQuery } from "hooks/use-cancel-query";
import { useHomeRerender } from "hooks/use-home-rerender";
import { useTimerNotification } from "hooks/use-timer-notification";

import TimerContainer from "components/timer-container";
import LoadingSpinner from "components/loading-spinner";
import AsyncBoundary from "components/async-boundary";
import ErrorFallback from "components/error-fallback";

import Text from "components/text";
import * as Styled from "./index.style";

interface IFetchCalendar {
  queryKey: string | (string | number)[];
  isMidnight: Date;
  notification: ReturnType<typeof useTimerNotification>;
}

interface IFetchEvent {
  queryKey: string | (string | number)[];
}

const Home = () => {
  const { isMidnight, isSix } = useHomeRerender();
  const queryKey = useMemo(
    () => ["fetchEventData", ["fetchCalendarData", isMidnight.getDate()]],
    [isMidnight]
  );
  const notification = useTimerNotification();

  useCancelQuery(queryKey);

  return (
    <Styled.Home>
      <Styled.Notification onClick={notification.requestPermission}>
        <Text>타이머 알림 활성화</Text>
      </Styled.Notification>
      <Styled.Section title="진행중인 이벤트">
        <AsyncBoundary
          suspenseFallback={<LoadingSpinner />}
          errorFallback={<ErrorFallback />}
        >
          <FetchEvent queryKey={queryKey[0]} />
        </AsyncBoundary>
      </Styled.Section>
      <Styled.Section title="오늘의 캘린더섬">
        <AsyncBoundary
          suspenseFallback={<LoadingSpinner />}
          errorFallback={<ErrorFallback />}
        >
          <FetchCalendar
            queryKey={queryKey[1]}
            isMidnight={isMidnight}
            notification={notification.activeNotification}
          />
        </AsyncBoundary>
      </Styled.Section>
      <Styled.Section title="오늘의 모험섬">
        <TimerContainer
          data={DAILY_ISLAND}
          notification={notification.activeNotification}
        />
      </Styled.Section>
      <Styled.Section title="오늘의 필드보스">
        <TimerContainer
          data={FIELD_BOSS[isSix.getDay()]}
          rerenderKey={isSix}
          notification={notification.activeNotification}
        />
      </Styled.Section>
      <Styled.Section title="오늘의 카오스 게이트">
        <TimerContainer
          data={CHAOS_GATE[isSix.getDay()]}
          rerenderKey={isSix}
          notification={notification.activeNotification}
        />
      </Styled.Section>
      <Styled.Section title="오늘의 유령선">
        <TimerContainer
          data={PHANTOM_SHIP[isSix.getDay()]}
          rerenderKey={isSix}
          notification={notification.activeNotification}
        />
      </Styled.Section>
      <Styled.Section title="오늘의 항해">
        <TimerContainer
          data={OCEAN_ACT[isSix.getDay()]}
          rerenderKey={isSix}
          notification={notification.activeNotification}
        />
      </Styled.Section>
    </Styled.Home>
  );
};

const FetchCalendar = React.memo(function ({
  queryKey,
  isMidnight,
  notification,
}: IFetchCalendar) {
  const yoil = isMidnight.getDay();
  const calendarData = useCalendar(queryKey);
  const isWeek = 6 > yoil && yoil > 0;
  const title = useMemo(() => {
    if (isWeek) return "11:00 ~ 21:00";
    return "09:00 ~ 23:00";
  }, [isWeek]);

  return (
    <Styled.Section title={title}>
      <TimerContainer
        data={
          isWeek ? calendarData.calendar[0] : calendarData.calendar[1] ?? []
        }
        rerenderKey={isMidnight}
        notification={notification}
      />
    </Styled.Section>
  );
});

const FetchEvent = React.memo(function ({ queryKey }: IFetchEvent) {
  const eventData = useEvent(queryKey);

  return (
    <Styled.EventSection data={eventData.events} dataKey="event">
      <Styled.Event />
    </Styled.EventSection>
  );
});

export default Home;
