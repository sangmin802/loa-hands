import React from "react";
import Event from "./event/index";
import LoadingSpinner from "components/loading-spinner/index";
import SectionContainer from "components/section-container/index";
import "./index.scss";

const Index = ({ events }) => {
  return (
    <SectionContainer title={"진행중인 이벤트"}>
      {!events && <LoadingSpinner />}
      {events?.map((event, index) => (
        <Event event={event} key={`event${index}`} />
      ))}
    </SectionContainer>
  );
};

export default Index;
