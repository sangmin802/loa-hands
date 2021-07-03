import React, {
  useCallback,
  useEffect,
  useMemo,
  Suspense,
  useState,
} from "react";
import { DAILY_ISLAND, FIELD_BOSS, CHAOS_GATE, OCEAN_ACT } from "json/json";
import { useHome } from "hooks/use-home";
import {
  SectionContainer,
  TimerContainer,
  LoadingSpinner,
  Event,
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
      <Suspense fallback={<LoadingSpinner />}>
        <FetchHome today={today} />
      </Suspense>
      <Styled.Section>
        <SectionContainer title="오늘의 모험섬">
          <TimerContainer data={DAILY_ISLAND} today={today} />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 필드보스">
          <TimerContainer data={FIELD_BOSS[yoil]} today={today} />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 카오스 게이트">
          <TimerContainer data={CHAOS_GATE[yoil]} today={today} />
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 항해">
          <TimerContainer data={OCEAN_ACT[yoil]} today={today} />
        </SectionContainer>
      </Styled.Section>
    </>
  );
};

const FetchHome = ({ today }) => {
  const homeData = useHome();

  return (
    <section role="home" data-isdata={homeData ? true : false}>
      <Styled.Section>
        <SectionContainer title="진행중인 이벤트">
          <Styled.Content type="event">
            {homeData?.events.map((event, index) => (
              <Styled.Event key={`event${index}`}>
                <Event event={event} />
              </Styled.Event>
            ))}
          </Styled.Content>
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 캘린더섬">
          <Styled.Section>
            <SectionContainer title="14:00">
              <TimerContainer
                data={homeData?.calendar[0] ?? []}
                today={today}
              />
            </SectionContainer>
          </Styled.Section>
          <Styled.Section>
            <SectionContainer title="21:00">
              <TimerContainer
                data={homeData?.calendar[1] ?? []}
                today={today}
              />
            </SectionContainer>
          </Styled.Section>
        </SectionContainer>
      </Styled.Section>
    </section>
  );
};

export default Home;
