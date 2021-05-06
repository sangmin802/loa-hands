import React from "react";
import TextContainer from "components/text-container/index";
import DangerousHTML from "components/dangerous-html/index";

const Index = ({ content }) => {
  return (
    <>
      {content.map(({ title, desc }) => (
        <div className="characteristic" key={title[0]}>
          <TextContainer text={title} />
          <DangerousHTML html={desc} />
        </div>
      ))}
    </>
  );
};

export default Index;
