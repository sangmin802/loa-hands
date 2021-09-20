import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  DAILY_ISLAND,
  FIELD_BOSS,
  CHAOS_GATE,
  OCEAN_ACT,
  PHANTOM_SHIP,
} from "json/timer";
import { useCalendar } from "hooks/use-calendar";
import { useEvent } from "hooks/use-event";
import {
  SectionContainer,
  TimerContainer,
  LoadingSpinner,
  Event,
  AsyncBoundary,
  ErrorFallback,
  MapContainer,
  Button,
  Text,
} from "components/";
import { interval } from "utils/events/interval";
import * as Styled from "./index.style";
import { useCancelQuery } from "hooks/use-cancel-query";
import { NotificationHandler } from "utils/events/notification";

interface IFetchCalendar {
  queryKey: string | (string | number)[];
  isMidnight: Date;
}

interface IFetchEvent {
  queryKey: string | (string | number)[];
}

const Home = () => {
  const [isMidnight, setMidnight] = useState(new Date());
  const [isSix, setSix] = useState(new Date());
  const queryKey = useMemo(
    () => ["fetchEventData", ["fetchCalendarData", isMidnight.getDate()]],
    [isMidnight]
  );

  const updateTime = useCallback(arr => {
    const [setMidnight, setSix] = arr;
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    if (hour === 0 && min === 0 && sec === 0) setMidnight(now);
    if (hour === 6 && min === 0 && sec === 0) setSix(now);
  }, []);

  const { startInterval, endInterval } = useMemo(
    () => interval(1, updateTime),
    [updateTime]
  );

  const createNotification = useCallback(works => {
    const [start, ready] = works.reduce(
      (prev, cur) => {
        cur.type === "START" ? prev[0].push(cur) : prev[1].push(cur);
        return prev;
      },
      [[], []]
    );

    const startBody = start.length
      ? `\n시작 컨텐츠\n[${start[0].name}] 등 ${start.length}개`
      : "";
    const readyBody = ready.length
      ? `\n준비 컨텐츠\n[${ready[0].name}] 등 ${ready.length}개`
      : "";

    return {
      title: `Loa-Hands 알림`,
      option: {
        body: startBody + readyBody,
      },
    };
  }, []);

  const notification = useMemo(
    () => new NotificationHandler(createNotification),
    [createNotification]
  );

  useEffect(() => {
    startInterval([setMidnight, setSix]);
    return () => {
      endInterval();
    };
  }, [endInterval, startInterval, setSix]);

  useCancelQuery(queryKey);

  return (
    <Styled.Home>
      <Styled.Section>
        <SectionContainer title="진행중인 이벤트">
          <AsyncBoundary
            suspenseFallback={<LoadingSpinner />}
            errorFallback={<ErrorFallback />}
          >
            <FetchEvent queryKey={queryKey[0]} />
          </AsyncBoundary>
        </SectionContainer>
      </Styled.Section>
      <Styled.Notification>
        <Button onClick={notification.requestPermission}>
          <Text>알림 활성화</Text>
        </Button>
      </Styled.Notification>
      <Styled.Section>
        <SectionContainer title="오늘의 캘린더섬">
          <AsyncBoundary
            suspenseFallback={<LoadingSpinner />}
            errorFallback={<ErrorFallback />}
          >
            <FetchCalendar queryKey={queryKey[1]} isMidnight={isMidnight} />
          </AsyncBoundary>
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 모험섬">
          <TimerContainer
            data={DAILY_ISLAND}
            notification={notification.activeNotification}
          />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 필드보스">
          <TimerContainer
            data={FIELD_BOSS[isSix.getDay()]}
            rerenderKey={isSix}
            notification={notification.activeNotification}
          />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 카오스 게이트">
          <TimerContainer
            data={CHAOS_GATE[isSix.getDay()]}
            rerenderKey={isSix}
            notification={notification.activeNotification}
          />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 유령선">
          <TimerContainer
            data={PHANTOM_SHIP[isSix.getDay()]}
            rerenderKey={isSix}
            notification={notification.activeNotification}
          />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 항해">
          <TimerContainer
            data={OCEAN_ACT[isSix.getDay()]}
            rerenderKey={isSix}
            notification={notification.activeNotification}
          />
        </SectionContainer>
      </Styled.Section>
    </Styled.Home>
  );
};

const FetchCalendar = React.memo(function ({
  queryKey,
  isMidnight,
}: IFetchCalendar) {
  const yoil = isMidnight.getDay();
  const calendarData = useCalendar(queryKey);
  const isWeek = 6 > yoil && yoil > 0;
  const title = useMemo(() => {
    if (isWeek) return "11:00 ~ 21:00";
    return "09:00 ~ 23:00";
  }, [isWeek]);

  return (
    <Styled.Section>
      <SectionContainer title={title}>
        <TimerContainer
          data={
            isWeek ? calendarData.calendar[0] : calendarData.calendar[1] ?? []
          }
          rerenderKey={isMidnight}
        />
      </SectionContainer>
    </Styled.Section>
  );
});

const FetchEvent = React.memo(function ({ queryKey }: IFetchEvent) {
  const eventData = useEvent(queryKey);

  return (
    <Styled.Content type="event">
      <MapContainer data={eventData.events} dataKey="event">
        <Event />
      </MapContainer>
    </Styled.Content>
  );
});

export default Home;
