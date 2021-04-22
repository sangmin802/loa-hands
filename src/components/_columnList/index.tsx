import React, { useCallback } from "react";
import ImgTextWrap from "components/_imgTextWrap/index";
import Detail from "components/_detail/index";
import { useDialog } from "hooks/useDialog";
import "./index.css";

export default ({ data, children }: { data; children? }) => {
  const { backSrc, detail } = data;
  const { setDialog } = useDialog();

  const callDialog = useCallback(() => {
    if (detail?.hover) {
      const dialog = <Detail data={data}>{children}</Detail>;
      setDialog(dialog);
    }
    return;
  }, [detail, setDialog, data, children]);

  return (
    <div
      className={`columnList ${detail?.hover ? "pointer" : ""}`}
      onClick={callDialog}
    >
      <ImgTextWrap
        backSrc={backSrc}
        grade={detail?.grade}
        src={detail?.src}
        text={detail ? [...detail.subTitle, detail.title] : []}
      />
    </div>
  );
};
