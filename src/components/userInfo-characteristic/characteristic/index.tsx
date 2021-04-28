import React from "react";
import TextContainer from "components/text-container/index";

const Index = ({ content }) => {
  return (
    <>
      {content.map(({ title, desc }) => {
        return (
          <div className="characteristic" key={title[0]}>
            <TextContainer text={title} />
            <div>{desc}</div>
          </div>
        );
      })}
    </>
  );
};

export default Index;
