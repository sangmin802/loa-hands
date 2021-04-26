import React, { useCallback } from "react";
import styled from "styled-components";
import _ from "utility/utility";

const Index = ({ tabName, setTab, selected, index }) => {
  const tabClickEvent = useCallback(() => {
    setTab({ tab: index });
  }, [index, setTab]);

  return (
    <IsSelectedContainer
      className={`tab textCenter`}
      isSelected={selected}
      onClick={tabClickEvent}
    >
      {tabName}
    </IsSelectedContainer>
  );
};

const IsSelectedContainer = styled.nav<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "white" : "")};
  * {
    color: ${({ isSelected }) => (isSelected ? "white" : "")};
  }
`;

export default React.memo(Index, (left, right) => _.compareObj(left, right));
