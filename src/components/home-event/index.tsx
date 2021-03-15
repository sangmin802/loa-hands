import React from "react";
import Event from "./event/index";
import "./index.css";

const Index = ({ events }) => {
  return (
    <section className="events homeSection">
      <div className="homeSectionTitle rem1 textCenter">진행중인 이벤트</div>
      <div className="eventsWrap">
        {events.map((_event, index) => {
          return <Event event={_event} key={`event${index}`} />;
        })}
      </div>
    </section>
  );
};

export default Index;
