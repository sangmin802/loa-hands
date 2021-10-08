import React, { useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as Styled from "./index.style";
import { useQueryErrorResetBoundary } from "react-query";
import Text from "components/text";

const Header = ({ ...props }) => {
  const { reset } = useQueryErrorResetBoundary();
  const textInput = useRef(null);
  const history = useHistory();
  const handleSubmit = useCallback(
    e => {
      const name = textInput?.current?.value;
      const isEmpty = name.replace(/ /gi, "") === "";

      e.preventDefault();
      reset();

      textInput.current.value = null;

      if (isEmpty) return;
      history.replace(`/userInfo/${name}`);
    },
    [textInput, history, reset]
  );

  const handleGoHome = useCallback(
    e => {
      e.preventDefault();
      reset();
      history.replace(`/`);
    },
    [reset, history]
  );

  return (
    <Styled.Container {...props}>
      <Styled.Logo onClick={handleGoHome}>
        <Styled.Background data-testid="go-home" />
      </Styled.Logo>
      <Styled.Form
        data-testid="submit-form"
        className="submit-area"
        onSubmit={handleSubmit}
      >
        <Styled.InputText
          data-testid="search-area"
          className="search-area"
          type="text"
          ref={textInput}
          autoComplete="off"
        />
        <Styled.InputSubmit>
          <Text>검색</Text>
        </Styled.InputSubmit>
      </Styled.Form>
    </Styled.Container>
  );
};

export default React.memo(Header);
