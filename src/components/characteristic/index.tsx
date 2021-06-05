import React from "react";
import Lodash from "lodash";
import { TextContainer, DangerousHTML } from "../";
import "./index.scss";

const Chararteristic = ({ data }) => {
  return (
    <div className="characteristic-container">
      {data.map(({ title, content }) => {
        return (
          <div className="characteristics" key={title}>
            <div className="title text-center">{title}</div>
            <Item content={content} />
          </div>
        );
      })}
    </div>
  );
};

const Item = ({ content }) => {
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

export default React.memo(Chararteristic, (left, right) =>
  Lodash.isEqual(left, right)
);
