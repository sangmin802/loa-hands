import React, { useCallback } from "react";
import { IUserDetail } from "types/modal";
import { useModal } from "components/modal/modal";
import Text from "components/common/text/text";
import * as Styled from "./infoItem.style";

export interface InfoItemProps {
  data: IUserDetail;
}

function InfoItem({ data, ...props }: InfoItemProps) {
  const { backSrc, detail } = data;
  const setModal = useModal();

  const handleDialog = useCallback(() => {
    data.detail?.hover && setModal?.({ type: "ITEM", data });
  }, [data, setModal]);

  return (
    <Styled.InfoItem
      data-testid="list-item"
      hover={detail?.hover}
      onClick={handleDialog}
      {...props}
    >
      <Styled.Thumbnail
        type={data.type}
        color={detail?.grade && `gradient${detail.grade}`}
        src={detail?.src ?? backSrc}
      />
      <Styled.Desc type={data.type}>
        {detail?.subTitle.map((subTitle, i) => (
          <Text
            color={detail?.grade ? `color${detail?.grade}` : "white"}
            size="0.8"
            key={i}
          >
            {subTitle}
          </Text>
        ))}
        <Text size="1">{detail?.title}</Text>
      </Styled.Desc>
    </Styled.InfoItem>
  );
}

export default React.memo(InfoItem);
