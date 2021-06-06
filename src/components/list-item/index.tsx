import React, { cloneElement, useCallback } from "react";
import { Thumbnail, TextContainer, Image } from "../";
import "./index.scss";

const ListItem = ({
  data,
  children,
  setDialog,
}: {
  data?;
  children?;
  setDialog?;
}) => {
  const { backSrc, detail } = data;

  const setDialogHandler = useCallback(() => {
    if (!detail?.hover) return;
    const dialog = cloneElement(children, { data });
    setDialog(dialog);
  }, [children, data, setDialog, detail]);

  return (
    <div
      className={`column-list ${detail?.hover ? "pointer" : ""}`}
      onClick={setDialogHandler}
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

export default ListItem;
