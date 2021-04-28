import React, { useEffect } from "react";
import { dailyIsland, fieldBoss, chaosGate, oceanCont } from "json/JSON";
import { useDateOver } from "hooks/useDateOver";
import { useHome } from "hooks/useHome";
import "style/home.css";

// 컴포넌트
import EventSection from "components/home-event/index";
import TimerSection from "components/home-timerSection/index";
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
      <TimerSection data={dailyIsland} today={today} text="오늘의 모험섬" />
      <TimerSection
        data={fieldBoss[yoil]}
        today={today}
        text="오늘의 필드보스"
      />
      <TimerSection
        data={chaosGate[yoil]}
        today={today}
        text="오늘의 카오스 게이트"
      />
      <TimerSection data={oceanCont[yoil]} today={today} text="오늘의 항해" />
    </section>
  );
};

export default Index;
