import React from "react";
import Event from "./event/index";
import LoadingSpinner from "components/loading-spinner/index";
import HomeSection from "components/home-section/index";
import "./index.css";

const Index = ({ events }) => {
  return (
    <HomeSection title={"진행중인 이벤트"}>
      {!events && <LoadingSpinner />}
      {events &&
        events.map((_event, index) => {
          return <Event event={_event} key={`event${index}`} />;
        })}
    </HomeSection>
  );
};

export default Index;
