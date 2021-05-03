import React from "react";
import CalendarWrap from "./calendar/index";
import LoadingSpinner from "components/loading-spinner/index";
import SectionContainer from "components/section-container/index";
import "./index.scss";

const Index = ({ calendar = null, today }) => {
  return (
    <SectionContainer title="오늘의 캘린더섬">
      {!calendar && <LoadingSpinner />}
      {calendar?.map((cal, index) => (
        <CalendarWrap
          key={`calendar${index}`}
          cal={cal}
          index={index}
          today={today}
        />
      ))}
    </SectionContainer>
  );
};

export default Index;
