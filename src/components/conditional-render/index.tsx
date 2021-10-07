import React from "react";

const ConditionalRender = ({ render, Component, ...props }) => {
  if (!render) return null;

  return <Component {...props} />;
};

export default React.memo(ConditionalRender);

// const ConditionalRender = Component => ({ render, ...props }) =>
//   render ? <Component {...props} /> : null;

// export default ConditionalRender;
