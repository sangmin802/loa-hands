import React, { useCallback, useEffect, useMemo } from "react";
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
  const { homeData, setHomeData } = useHome();
  const now = new Date();
  const today = now.getDate();
  const yoil = now.getDay();

  const checkNight = useCallback(setHomeData => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    if (hour === 0 && min === 0 && sec === 0) {
      setHomeData();
    }
  }, []);

  const { startInterval, endInterval } = useMemo(
    () => interval(1, checkNight),
    [checkNight]
  );

  useEffect(() => {
    startInterval(setHomeData);
    return () => {
      endInterval();
    };
  }, [endInterval, startInterval, setHomeData]);

  useEffect(() => {
    if (!homeData) setHomeData();
  }, [homeData, setHomeData]);

  return (
    <section role="home" data-isdata={homeData ? true : false}>
      <Styled.Section>
        <SectionContainer title="진행중인 이벤트">
          {!homeData?.events && <LoadingSpinner back={false} />}
          {homeData?.events && (
            <Styled.Content type="event">
              {homeData?.events.map((event, index) => (
                <Styled.Event key={`event${index}`}>
                  <Event event={event} />
                </Styled.Event>
              ))}
            </Styled.Content>
          )}
        </SectionContainer>
      </Styled.Section>
      <Styled.Section>
        <SectionContainer title="오늘의 캘린더섬">
          {!homeData?.calendar && <LoadingSpinner back={false} />}
          {homeData?.calendar && (
            <>
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
            </>
          )}
        </SectionContainer>
      </Styled.Section>
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
    </section>
  );
};

export default Home;
