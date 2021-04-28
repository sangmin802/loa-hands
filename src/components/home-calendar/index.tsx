import React from "react";
import CalendarWrap from "./calendar/index";
import LoadingSpinner from "components/loading-spinner/index";
import HomeSection from "components/home-section/index";

const Index = ({ calendar = null, yoil, today }) => {
  return (
    <HomeSection title="오늘의 캘린더섬">
      {!calendar && <LoadingSpinner />}
      {calendar && (
        <>
          {yoil === 0 || yoil === 6 ? (
            calendar.map((cal, index) => {
              return (
                <CalendarWrap
                  key={`calendar${index}`}
                  cal={cal}
                  index={index}
                  today={today}
                />
              );
            })
          ) : (
            <CalendarWrap cal={calendar[1]} index={1} today={today} />
          )}
        </>
      )}
    </HomeSection>
  );
};

export default Index;
