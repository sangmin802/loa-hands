import React, {
  ReactElement,
  useCallback,
  useEffect,
  useState,
  cloneElement,
} from "react";
import * as Styled from "./dialog.style";

export interface DialogProps {
  children: ReactElement;
  rerender: any;
}

function Dialog({ children, rerender }: DialogProps) {
  const [dialog, setDialog] = useState<ReactElement | null>(null);

  useEffect(() => {
    setDialog(null);
  }, [rerender]);

  const handleCloseDialog = useCallback(() => {
    setDialog(null);
  }, []);

  const fixViewport = useCallback((body, top) => {
    const style = `
      position: fixed;
      top: -${top}px;
      left: 0px;
      right: 0px;
    `;
    body.setAttribute("style", style);
  }, []);

  const resetViewport = useCallback((body, top) => {
    body.setAttribute("style", "");
    window.scrollTo(0, top);
  }, []);

  useEffect(() => {
    if (!dialog) return;
    const body = document.querySelector("body");
    const top = window.pageYOffset;

    fixViewport(body, top);

    return () => {
      if (!dialog) return;
      resetViewport(body, top);
    };
  }, [dialog, fixViewport, resetViewport]);

  return (
    <>
      {dialog && (
        <>
          <Styled.Background
            onClick={handleCloseDialog}
            data-testid="close-dialog"
          />
          <Styled.Container data-testid="dialog-content">
            {dialog}
          </Styled.Container>
        </>
      )}
      {cloneElement(children, { setDialog })}
    </>
  );
}

export default React.memo(Dialog);
