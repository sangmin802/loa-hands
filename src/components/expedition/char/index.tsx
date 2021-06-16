import React, { useCallback } from "react";
import { Button, Text } from "components/";
import * as Styled from "./index.style";

const Index = ({ setUserData, char }) => {
  const setUserDataEvent = useCallback(() => {
    setUserData(char.name);
  }, [char.name, setUserData]);

  return (
    <Styled.Container>
      <Button onClick={setUserDataEvent} aria-label="expedition-char">
        <Text type="desc">
          {char.lv} {char.name}
        </Text>
      </Button>
    </Styled.Container>
  );
};

export default Index;
