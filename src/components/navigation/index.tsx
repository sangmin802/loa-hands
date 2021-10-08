import React, { ReactElement, useCallback, useMemo } from "react";
import Text from "components/text";
import * as Styled from "./index.style";

interface IItem {
  setNav: (T: number) => void;
  selectedSub: number;
  i?: number;
  navName?: string | ReactElement;
}

interface INavigation {
  selectedNav: number;
  setNav: (T: number) => void;
  isShow?: number;
  arr?: (string | ReactElement)[];
}

const Navigation = ({
  arr,
  selectedNav,
  setNav,
  isShow,
  ...props
}: INavigation) => {
  return (
    <Styled.Navigation {...props} data={arr} dataKey="navName">
      <Item setNav={setNav} selectedSub={selectedNav} />
    </Styled.Navigation>
  );
};

export const Item = ({ navName, setNav, selectedSub, i }: IItem) => {
  const handleNavigation = useCallback(() => {
    setNav(i);
  }, [i, setNav]);

  const selected = useMemo(() => selectedSub === i, [selectedSub, i]);

  const fontColor = useMemo(() => (selected ? "white" : "#666"), [selected]);

  return (
    <Styled.NavigationButton onClick={handleNavigation}>
      <Text color={fontColor}>{navName}</Text>
    </Styled.NavigationButton>
  );
};

export default React.memo(Navigation);
