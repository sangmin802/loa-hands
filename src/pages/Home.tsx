import React, { useEffect } from "react";
import { DAILY_ISLAND, FIELD_BOSS, CHAOS_GATE, OCEAN_ACT } from "json/json";
import { useDateOver } from "hooks/use-date";
import { useHome } from "hooks/use-home";
import "style/home.scss";

// 컴포넌트
import EventSection from "components/home-event/index";
import TimerSection from "components/home-timer/index";
import CalendarSection from "components/home-calendar/index";

const Index = () => {
  const { homeData, setHomeData } = useHome();

  useDateOver(setHomeData);

  useEffect(() => {
    if (!homeData) setHomeData();
  }, [homeData, setHomeData]);

  const today = new Date().getSeconds();
  const yoil = new Date().getDay();

  return (
    <section className="home">
      <EventSection events={homeData?.events} />
      <CalendarSection
        calendar={homeData?.calendar}
        today={today}
        yoil={yoil}
      />
      <TimerSection data={DAILY_ISLAND} today={today} text="오늘의 모험섬" />
      <TimerSection
        data={FIELD_BOSS[yoil]}
        today={today}
        text="오늘의 필드보스"
      />
      <TimerSection
        data={CHAOS_GATE[yoil]}
        today={today}
        text="오늘의 카오스 게이트"
      />
      <TimerSection data={OCEAN_ACT[yoil]} today={today} text="오늘의 항해" />
    </section>
  );
};

export default Index;
