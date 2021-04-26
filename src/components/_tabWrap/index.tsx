import React from "react";
import Tab from "./tab/index";
import _ from "utility/utility";
import styled from "styled-components";
import "./index.css";

const Index = ({ tabClass, arr, isShow, selectedTab, setTab }) => {
  return (
    <IsShowContainer className={`${tabClass}TabWrap tabWrap`} isShow={isShow}>
      {arr.map((tab, index) => {
        const active = isShow && selectedTab === index ? true : false;
        return (
          <Tab
            key={`${tabClass}Tab${index}`}
            tabName={tab}
            setTab={setTab}
            selected={active}
            index={index}
          />
        );
      })}
    </IsShowContainer>
  );
};

const IsShowContainer = styled.nav<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "" : "none")};
`;

export default React.memo(Index, (left, right) => _.compareObj(left, right));
