import React, { useEffect } from "react";
import * as Styled from "./index.style";

const SearchLoading = () => {
  useEffect(() => {
    const input: HTMLInputElement =
      document.querySelector(".search-area") ?? null;
    input?.setAttribute("disabled", "true");

    return () => {
      input?.removeAttribute("disabled");
    };
  }, []);

  return (
    <Styled.BackgroundContainer data-testid="search-loading">
      <Styled.ImageContainer
        src={`${process.env.PUBLIC_URL}/img/emoticon_5.gif`}
      />
    </Styled.BackgroundContainer>
  );
};

export default SearchLoading;
