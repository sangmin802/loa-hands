import React, { useCallback } from "react";
import { Thumbnail, TextContainer, Detail, Image } from "../";
import { useDialog } from "hooks/use-dialog";
import "./index.scss";

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
      className={`column-list ${detail?.hover ? "pointer" : ""}`}
      onClick={callDialog}
    >
      <Thumbnail>
        <Image
          args={{
            className: `gradient${detail?.grade}`,
            src: detail?.src ?? backSrc,
          }}
        />
        <TextContainer
          text={detail ? [...detail.subTitle, detail.title] : []}
          grade={detail?.grade}
        />
      </Thumbnail>
    </div>
  );
};

export default ColumnList;
