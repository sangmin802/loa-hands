import React, {
  PropsWithChildren,
  ReactElement,
  useCallback,
  useMemo,
} from "react";
import Lodash from "lodash";
import { Button, Text, MapContainer } from "components/";
import * as Styled from "./index.style";

interface IItem {
  setNav: (T: number) => void;
  selectedSub: number;
  navType: string;
  i?: number;
  navName?: string | ReactElement;
}

interface INavigation {
  navType: string;
  selectedNav: number;
  setNav: (T: number) => void;
  arr?: (string | ReactElement)[];
  i?: number;
  upperNav?: number;
}

const Navigation = ({
  navType,
  arr,
  selectedNav,
  setNav,
  i,
  upperNav,
}: PropsWithChildren<INavigation>) => {
  const isShow = useMemo(() => {
    if (navType === "main") return true;
    return upperNav === i;
  }, [navType, upperNav, i]);

  return (
    <Styled.Container
      role={`${navType}-nav-container`}
      isShow={isShow}
      type={navType}
    >
      <MapContainer data={arr} dataKey="navName">
        <Item setNav={setNav} selectedSub={selectedNav} navType={navType} />
      </MapContainer>
    </Styled.Container>
  );
};

export const Item = ({
  navName,
  setNav,
  selectedSub,
  i,
  navType,
}: PropsWithChildren<IItem>) => {
  const handleNavigation = useCallback(() => {
    setNav(i);
  }, [i, setNav]);

  const selected = useMemo(() => selectedSub === i, [selectedSub, i]);

  const fontColor = useMemo(() => (selected ? "white" : "#666"), [selected]);

  return (
    <Button data-testid={`${navType}-nav-${i}`} onClick={handleNavigation}>
      <Text color={fontColor}>{navName}</Text>
    </Button>
  );
};

export default React.memo(Navigation, (left, right) =>
  Lodash.isEqual(left, right)
);
