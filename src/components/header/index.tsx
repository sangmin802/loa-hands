import React, { useRef, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Styled from "./index.style";
import { Input, Button, Text } from "components/";

interface Props {
  resetBoundary?: () => void;
}

const Header = ({ resetBoundary }: Props) => {
  const textInput = useRef(null);
  const history = useHistory();
  const onSubmitHandler = useCallback(
    e => {
      const name = textInput?.current?.value;

      e.preventDefault();
      resetBoundary?.();

      history.replace(`/userInfo/${name}`);
      textInput.current.value = null;
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
