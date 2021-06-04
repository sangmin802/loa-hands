import React, { createElement } from "react";
import "./index.scss";

const Image = ({ args }: { args }) => {
  return (
    <div className="img-container">
      {createElement("img", { ...args, alt: args.src })}
    </div>
  );
};

export default Image;
