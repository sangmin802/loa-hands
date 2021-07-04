import React, { useRef, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Styled from "./index.style";
import { Input, Button, Text } from "components/";

const Header = () => {
  const textInput = useRef(null);
  const history = useHistory();

  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      const name = textInput?.current?.value;
      history.replace(`/userInfo/${name}`);
      textInput.current.value = null;
    },
    [textInput, history]
  );

  return (
    <Styled.Container>
      <Link to="/">
        <Styled.Background role="go-home" />
      </Link>
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
