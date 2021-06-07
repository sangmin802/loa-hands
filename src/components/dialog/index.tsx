import React, { useCallback, useEffect } from "react";
import * as Styled from "./index.style";

const Dialog = ({ dialog, setDialog }) => {
  const closeDialog = useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  useEffect(() => {
    // body에 overflow-y hidden 주는방식은 ios에서 적용 안됨
    const body = document.querySelector("body");
    const top = window.pageYOffset;
    if (dialog) {
      const style = `
        position: fixed;
        top: -${top}px;
        left: 0px;
        right: 0px;
      `;
      body.setAttribute("style", style);
    }
    return () => {
      if (dialog) {
        body.setAttribute("style", "");
        window.scrollTo(0, top);
      }
    };
  }, [dialog]);

  return (
    <>
      {dialog && (
        <>
          <Styled.Background onClick={closeDialog}></Styled.Background>
          <Styled.Container>{dialog}</Styled.Container>
        </>
      )}
    </>
  );
};

export default Dialog;
