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
  navName?: string | ReactElement;
  setNav: (T: number) => void;
  isSelectedMain: boolean;
  selectedSub: number;
  i?: number;
  navType: string;
}

interface INavigation {
  navType: string;
  arr: (string | ReactElement)[];
  isShow: boolean;
  selectedNav: number;
  setNav: (T: number) => void;
}

const Navigation = ({
  navType,
  arr,
  isShow,
  selectedNav,
  setNav,
}: PropsWithChildren<INavigation>) => {
  return (
    <Styled.Container
      role={`${navType}-nav-container`}
      isFlex={isShow}
      type={navType}
    >
      <MapContainer data={arr} dataKey="navName">
        <Item
          setNav={setNav}
          isSelectedMain={isShow}
          selectedSub={selectedNav}
          navType={navType}
        />
      </MapContainer>
    </Styled.Container>
  );
};

export const Item = ({
  navName,
  setNav,
  isSelectedMain,
  selectedSub,
  i,
  navType,
}: PropsWithChildren<IItem>) => {
  const handleNavigation = useCallback(() => {
    setNav(i);
  }, [i, setNav]);

  const selected = useMemo(() => isSelectedMain && selectedSub === i, [
    isSelectedMain,
    selectedSub,
    i,
  ]);

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
