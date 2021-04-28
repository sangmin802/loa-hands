import React, { useCallback } from "react";
import Thumbnail from "components/thumbnail/index";
import TextContainer from "components/text-container/index";
import Detail from "components/detail/index";
import { useDialog } from "hooks/useDialog";
import "./index.css";

const ColumnList = ({ data, children }: { data; children? }) => {
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
      <Thumbnail backSrc={backSrc} grade={detail?.grade} src={detail?.src}>
        <TextContainer
          text={detail ? [...detail.subTitle, detail.title] : []}
          grade={detail?.grade}
        />
      </Thumbnail>
    </div>
  );
};

export default ColumnList;
