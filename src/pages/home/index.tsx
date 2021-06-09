import React, { useEffect } from "react";
import { DAILY_ISLAND, FIELD_BOSS, CHAOS_GATE, OCEAN_ACT } from "json/json";
import { useDateOver } from "hooks/use-date";
import { useHome } from "hooks/use-home";
import {
  SectionContainer,
  TimerContainer,
  LoadingSpinner,
  Event,
} from "components/";
import * as Styled from "./index.style";

const Home = () => {
  const { homeData, setHomeData } = useHome();

  useDateOver(setHomeData);

  useEffect(() => {
    if (!homeData) setHomeData();
  }, [homeData, setHomeData]);

  const today = new Date().getSeconds();
  const yoil = new Date().getDay();
  return (
    <section className="home">
      <Styled.Section>
        <SectionContainer title="진행중인 이벤트" cn="event-container">
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
        <SectionContainer title="오늘의 캘린더섬" cn="calendar-container">
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
