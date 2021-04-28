import React from "react";
import TimerWrap from "./timerWrap/index";
import HomeSection from "components/home-section/index";

const Index = ({ text, data, today }) => {
  return (
    <HomeSection title={text}>
      <TimerWrap data={data} today={today} />
    </HomeSection>
  );
};

export default Index;
