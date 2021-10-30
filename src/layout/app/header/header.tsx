import React, { useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useQueryErrorResetBoundary } from "react-query";
import Text from "components/text/text";
import * as Styled from "./header.style";

function Header({ ...props }) {
  const { reset } = useQueryErrorResetBoundary();
  const textInput = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const { current } = textInput;

      if (!current) return;
      const name = current.value;
      const isEmpty = name?.replace(/ /gi, "") === "";

      if (isEmpty) return;
      reset();
      e.target.search.disabled = true;
      e.target.search.value = null;
      history.replace(`/userInfo/${name}`);
    },
    [textInput]
  );

  const handleGoHome = useCallback(e => {
    e.preventDefault();
    reset();
    history.replace(`/`);
  }, []);

  const handleUnDisabled = useCallback(e => {
    if (!e.target.disabled) return;
    e.target.disabled = false;
  }, []);

  return (
    <Styled.Container {...props}>
      <Styled.Logo onClick={handleGoHome}>
        <Styled.Background data-testid="go-home" />
      </Styled.Logo>
      <Styled.Form data-testid="submit-form" onSubmit={handleSubmit}>
        <Styled.InputText
          onMouseOverCapture={handleUnDisabled}
          data-testid="search-area"
          type="text"
          name="search"
          ref={textInput}
          autoComplete="off"
        />
        <Styled.InputSubmit>
          <Text>검색</Text>
        </Styled.InputSubmit>
      </Styled.Form>
    </Styled.Container>
  );
}

export default React.memo(Header);
