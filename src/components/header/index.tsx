import React, { useRef, useCallback, PropsWithChildren } from "react";
import { useHistory } from "react-router-dom";
import * as Styled from "./index.style";
import { Input, Button, Text } from "components/";

interface IHeader {
  resetBoundary?: () => void;
}

const Header = ({ resetBoundary }: PropsWithChildren<IHeader>) => {
  const textInput = useRef(null);
  const history = useHistory();
  const onSubmitHandler = useCallback(
    e => {
      const name = textInput?.current?.value;
      const isEmpty = name.replace(/ /gi, "") === "";

      e.preventDefault();
      resetBoundary?.();

      textInput.current.value = null;

      if (isEmpty) return;
      history.replace(`/userInfo/${name}`);
    },
    [textInput, history, resetBoundary]
  );

  const onHomeHandler = useCallback(
    e => {
      e.preventDefault();
      resetBoundary?.();
      history.replace(`/`);
    },
    [resetBoundary, history]
  );

  return (
    <Styled.Container>
      <Button onClick={onHomeHandler}>
        <Styled.Background role="go-home" />
      </Button>
      <Styled.Form
        role="form"
        className="submit-area"
        onSubmit={onSubmitHandler}
      >
        <Styled.InputText>
          <Input
            className="search-area"
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
    </Styled.Container>
  );
};

export default Header;
