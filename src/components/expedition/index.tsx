import React from "react";
import Lodash from "lodash";
import "./index.scss";
import ExpeditionServer from "./server/index";

const UserExpedition = ({
  userData,
  setUserData,
  expeditionPop,
  toggleExpedition,
}) => {
  const {
    expeditionInfo: { expeditionUserWrap },
  } = userData;

  const displayPop = expeditionPop ? "display-block" : null;

  return (
    <div className={`searched-user-expedition z-index11 ${displayPop}`}>
      <div
        className="searched-user-expedition-close"
        onClick={toggleExpedition}
      >
        닫기
      </div>
      {expeditionUserWrap.map((wrap, index) => {
        return (
          <ExpeditionServer
            key={`userExpedition${index}`}
            wrap={wrap}
            setUserData={setUserData}
          />
        );
      })}
    </div>
  );
};

export default React.memo(UserExpedition, (left, right) =>
  Lodash.isEqual(left, right)
);
