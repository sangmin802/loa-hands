import React from "react";
import "./index.scss";

const TextContainer = ({ text, grade }: { text; grade? }) => {
  return (
    <div className="text-container">
      {text.map((res, index) => {
        return (
          <div
            key={`text${index}`}
            className={`overflow-dot ${
              index === 0 && grade ? `color${grade}` : ""
            }`}
          >
            {res}
          </div>
        );
      })}
    </div>
  );
};

export default TextContainer;
