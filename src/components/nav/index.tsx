import React, { useCallback, useMemo } from "react";
import Lodash from "lodash";
import { Button, Text } from "components/";
import * as Styled from "./index.style";

const Navigation = ({ navType, arr, isShow, selectedNav, setNav }) => {
  return (
    <Styled.Container isFlex={isShow} type={navType}>
      {arr.map((tab, index) => {
        return (
          <Styled.Content key={`${navType}Nav${index}`}>
            <Item
              navName={tab}
              setNav={setNav}
              selected={isShow && selectedNav === index ? true : false}
              index={index}
            />
          </Styled.Content>
        );
      })}
    </Styled.Container>
  );
};

export const Item = ({ navName, setNav, selected, index }) => {
  const navClickHandler = useCallback(() => {
    setNav(index);
  }, [index, setNav]);

  const fontColor = useMemo(() => (selected ? "white" : "#666"), [selected]);

  return (
    <Button onClick={navClickHandler}>
      <Text color={fontColor}>{navName}</Text>
    </Button>
  );
};

export default React.memo(Navigation, (left, right) =>
  Lodash.isEqual(left, right)
);
