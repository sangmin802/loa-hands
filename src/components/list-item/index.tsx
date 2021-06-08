import React, { cloneElement, useCallback } from "react";
import { Thumbnail, TextContainer, Image, Text } from "components/";
import * as Styled from "./index.style";

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
    <Styled.Container hover={detail?.hover} onClick={setDialogHandler}>
      <Image src={detail?.src ?? backSrc} color={`gradient${detail?.grade}`} />
      {detail && (
        <Styled.Desc>
          {detail.subTitle.map((text, index) => (
            <Text
              key={text}
              color={index === 0 ? `color${detail.grade}` : "white"}
              type={"subTitle"}
            >
              {text}
            </Text>
          ))}
          <Text>{detail.title}</Text>
        </Styled.Desc>
      )}
    </Styled.Container>
  );
};

export default ListItem;
