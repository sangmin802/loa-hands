import React, { useCallback, useMemo } from "react";
import Lodash from "lodash";
import { Button, Text } from "components/";
import * as Styled from "./index.style";

const Navigation = ({ navType, arr, isShow, selectedNav, setNav }) => {
  return (
    <Styled.Container isFlex={isShow} type={navType}>
      {arr.map((tab, index) => {
        return (
          <Item
            key={`${navType}Nav${index}`}
            NavName={tab}
            setNav={setNav}
            selected={isShow && selectedNav === index ? true : false}
            index={index}
          />
        );
      })}
    </Styled.Container>
  );
};

const Item = ({ NavName, setNav, selected, index }) => {
  const navClickHandler = useCallback(() => {
    setNav(index);
  }, [index, setNav]);

  const fontColor = useMemo(() => (selected ? "white" : "#666"), [selected]);

  return (
    <Styled.Content>
      <Button onClick={navClickHandler}>
        <Text color={fontColor}>{NavName}</Text>
      </Button>
    </Styled.Content>
  );
};

export default React.memo(Navigation, (left, right) =>
  Lodash.isEqual(left, right)
);
