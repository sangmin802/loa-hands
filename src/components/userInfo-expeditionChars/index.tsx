import React from "react";
import _ from "utility";
import { Selector } from "store/controller/selector";
import { UserInfo } from "store/controller/dispatchers";
import "./index.css";

import ExpeditionServer from "./server/index";

const UserExpedition = ({
  userData,
  setUserData,
  expeditionPop,
  setExpeditionPop,
}) => {
  const {
    expeditionInfo: { expeditionUserWrap },
  } = userData;
  // const {userData : {expeditionInfo : {expeditionUserWrap}}, expeditionPop} = Selector(['userData', 'expeditionPop', 'userInfoMainTab'])
  // const {expeditionPopToggle, getUserData} = UserInfo();

  const displayPop = expeditionPop ? "displayBlock" : null;

  return (
    <div className={`searchedUserExpedition zIndex11 ${displayPop}`}>
      <div className="searchedUserExpeditionClose" onClick={setExpeditionPop}>
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
  _.compareObj(left, right)
);
