import React, { cloneElement, useCallback } from "react";
import { Image, Text } from "components/";
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
    <Styled.Container
      role="list-item"
      hover={detail?.hover}
      onClick={setDialogHandler}
      type={data.type}
    >
      <Image src={detail?.src ?? backSrc} color={`gradient${detail?.grade}`} />
      {detail && (
        <Styled.Desc type={data.type}>
          {detail.subTitle.map(text => (
            <Text
              key={text}
              color={detail.grade ? `color${detail.grade}` : "white"}
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
