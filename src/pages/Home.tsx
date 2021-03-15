import React, { useEffect } from "react";
import { dailyIsland, fieldBoss, chaosGate, oceanCont } from "json/JSON";
import DateOverHook from "hooks/dateOverHook";
import HomeDataHook from "hooks/homeDataHook";

// 컴포넌트
import EventSection from "components/home-event/index";
import TimerSection from "components/home-timerSection/index";
import HomeBlank from "template/homeBlank";
import CalendarSection from "components/home-calendar/index";

const Index = () => {
  const { homeData, setHomeData } = HomeDataHook();

  DateOverHook(setHomeData);

  useEffect(() => {
    if (!homeData) setHomeData();
  }, [homeData, setHomeData]);

  const today = new Date().getSeconds();
  const yoil = new Date().getDay();

  return (
    <>
      {!homeData && <HomeBlank data={dailyIsland} />}
      {homeData && (
        <section className="home">
          <EventSection events={homeData.events} />
          <CalendarSection
            calendar={homeData.calendar}
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
          <TimerSection
            data={oceanCont[yoil]}
            today={today}
            text="오늘의 항해"
          />
        </section>
      )}
    </>
  );
};

export default Index;
