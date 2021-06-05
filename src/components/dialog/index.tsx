import React, { useCallback, useEffect } from "react";
import { useDialog } from "hooks/use-dialog";
import "./index.scss";

const Dialog = () => {
  const { dialog, setDialog } = useDialog();
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
          <div className="dialog-back" onClick={closeDialog}></div>
          <div className="dialog-content">{dialog}</div>
        </>
      )}
    </>
  );
};

export default React.memo(Dialog, () => true);
