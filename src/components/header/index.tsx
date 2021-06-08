import React, { useCallback, useRef } from "react";
import Lodash from "lodash";
import * as Styled from "./index.style";
import { Input, Text, Button } from "components/";

const Header = ({ setHomeData, setUserData }) => {
  const textInput = useRef(null);
  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      setUserData(textInput.current.value);
      textInput.current.value = null;
    },
    [textInput, setUserData]
  );

  return (
    <Styled.Header>
      <Styled.InnerHeader>
        <Styled.Background onClick={setHomeData} />
        <Styled.Form onSubmit={onSubmitHandler}>
          <Styled.InputText>
            <Input
              type="text"
              name="searchedUser"
              ref={textInput}
              autoComplete="off"
            />
          </Styled.InputText>
          <Styled.InputSubmit>
            <Button>
              <Text>검색</Text>
            </Button>
          </Styled.InputSubmit>
        </Styled.Form>
      </Styled.InnerHeader>
    </Styled.Header>
  );
};

export default React.memo(Header, (left, right) => Lodash.isEqual(left, right));
