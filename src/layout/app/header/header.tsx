import React, { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryErrorResetBoundary } from "react-query";
import Text from "components/common/text/text";
import * as Styled from "./header.style";

function Header({ ...props }) {
  const { reset } = useQueryErrorResetBoundary();
  const textInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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
      navigate(`/userInfo/${name}`, { replace: true });
    },
    [textInput, navigate, reset]
  );

  const handleGoHome = useCallback(
    e => {
      e.preventDefault();
      reset();
      navigate(`/`, { replace: true });
    },
    [navigate, reset]
  );

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
