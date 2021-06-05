import React from "react";
import Lodash from "lodash";
import { DangerousHTML } from "../";
import "./index.scss";

const IntentString = ({ data }: { data? }) => {
  return (
    <div className="indent-strings">
      {data.map(({ title: { val }, desc }, index) => {
        return (
          <div key={index} className="indent-string">
            <DangerousHTML html={val} />
            <div>
              {desc.map(({ val }, index) => (
                <DangerousHTML key={index} html={val} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(IntentString, (left, right) =>
  Lodash.isEqual(left, right)
);
