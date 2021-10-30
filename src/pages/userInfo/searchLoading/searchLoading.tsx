import React from "react";
import * as Styled from "./searchLoading.style";

function SearchLoading() {
  return (
    <Styled.BackgroundContainer data-testid="search-loading">
      <Styled.ImageContainer
        src={`${process.env.PUBLIC_URL}/img/emoticon_5.gif`}
      />
    </Styled.BackgroundContainer>
  );
}

export default SearchLoading;
