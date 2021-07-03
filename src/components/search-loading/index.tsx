import React, { useEffect } from "react";
import { Image } from "components/";
import * as Styeld from "./index.style";

const SearchLoading = () => {
  useEffect(() => {
    const input: HTMLInputElement = document.querySelector(".search-area");
    input.disabled = true;

    return () => {
      input.disabled = false;
    };
  }, []);

  return (
    <Styeld.BackgroundContainer>
      <Styeld.ImageContainer>
        <Image src={`${process.env.PUBLIC_URL}/img/emoticon_5.gif`} />
      </Styeld.ImageContainer>
    </Styeld.BackgroundContainer>
  );
};

export default SearchLoading;
