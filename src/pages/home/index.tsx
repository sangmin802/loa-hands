import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DAILY_ISLAND, FIELD_BOSS, CHAOS_GATE, OCEAN_ACT } from "json/json";
import { useCalendar } from "hooks/use-calendar";
import { useEvent } from "hooks/use-event";
import {
  SectionContainer,
  TimerContainer,
  LoadingSpinner,
  Event,
  AsyncBoundary,
  ErrorFallback,
} from "components/";
import { interval } from "utils/events/interval";
import * as Styled from "./index.style";

const Home = () => {
  const [now, setNow] = useState(new Date());
  const today = now.getDate();
  const yoil = now.getDay();

  const checkNight = useCallback(setNow => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    if (hour === 0 && min === 0 && sec === 1) {
      setNow(now);
    }
  }, []);

  const { startInterval, endInterval } = useMemo(
    () => interval(1, checkNight),
    [checkNight]
  );

  useEffect(() => {
    startInterval(setNow);
    return () => {
      endInterval();
    };
  }, [endInterval, startInterval, setNow]);

  return (
    <>
      <Styled.Section>
        <SectionContainer title="진행중인 이벤트">
          <AsyncBoundary
            suspenseFallback={<LoadingSpinner />}
            errorFallback={<ErrorFallback />}
          >
            <FetchEvent />
          </AsyncBoundary>
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 캘린더섬">
          <AsyncBoundary
            suspenseFallback={<LoadingSpinner />}
            errorFallback={<ErrorFallback />}
          >
            <FetchCalendar today={today} yoil={yoil} setNow={setNow} />
          </AsyncBoundary>
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 모험섬">
          <TimerContainer data={DAILY_ISLAND} rerenderKey={now} />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 필드보스">
          <TimerContainer data={FIELD_BOSS[yoil]} rerenderKey={now} />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 카오스 게이트">
          <TimerContainer data={CHAOS_GATE[yoil]} rerenderKey={now} />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 항해">
          <TimerContainer data={OCEAN_ACT[yoil]} rerenderKey={now} />
        </SectionContainer>
      </Styled.Section>
    </>
  );
};

const FetchCalendar = ({ today }) => {
  const calendarData = useCalendar();

  return (
    <>
      <Styled.Section>
        <SectionContainer title="14:00">
          <TimerContainer data={calendarData.calendar[0] ?? []} today={today} />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="21:00">
          <TimerContainer data={calendarData.calendar[1] ?? []} today={today} />
        </SectionContainer>
      </Styled.Section>
    </>
  );
};

const FetchEvent = () => {
  const eventData = useEvent();

  return (
    <Styled.Content type="event">
      {eventData.events.map((event, index) => (
        <Styled.Event key={`event${index}`}>
          <Event event={event} />
        </Styled.Event>
      ))}
    </Styled.Content>
  );
};

export default React.memo(Home, () => true);
