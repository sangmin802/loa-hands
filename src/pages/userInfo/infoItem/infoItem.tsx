import React, { ReactElement, useCallback } from "react";
import Text from "components/text/text";
import * as Styled from "./infoItem.style";
import Dialog from "./dialog/dialog";

interface DataProps {
  backSrc: string;
  type: string;
  detail: {
    src: string;
    grade: string;
    subTitle: string[];
    title: string;
    hover: boolean;
  };
}

export interface InfoItemProps {
  dispatcher: (T: ReactElement) => void;
  data: DataProps;
}

function InfoItem({ data, dispatcher: setDialog, ...props }: InfoItemProps) {
  const { backSrc, detail } = data;

  const handleDialog = useCallback(() => {
    detail?.hover && setDialog(<Dialog data={data} />);
  }, [data, setDialog]);

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
