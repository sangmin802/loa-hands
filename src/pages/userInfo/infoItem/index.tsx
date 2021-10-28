import React, { ReactElement, useCallback, useMemo } from "react";
import Text from "components/text";
import * as Styled from "./index.style";
import Dialog from "./dialog";

interface IDetail {
  src: string;
  grade: string;
  subTitle: string[];
  title: string;
  hover: boolean;
}

interface IData {
  backSrc: string;
  type: string;
  detail: IDetail;
}

interface IInfoItem {
  dispatcher: (T: ReactElement) => void;
  data: IData;
}

const InfoItem = ({ data, dispatcher: setDialog, ...props }: IInfoItem) => {
  const { backSrc, detail } = data;

  const dialog = useMemo(() => <Dialog data={data} />, [data]);

  const handleDialog = useCallback(() => {
    detail?.hover && setDialog(dialog);
  }, [dialog, setDialog]);

  return (
    <Styled.InfoItem
      data-testid="list-item"
      hover={detail?.hover}
      onClick={handleDialog}
      {...props}
    >
      <Styled.Thumbnail
        type={data.type}
        color={`gradient${detail?.grade}`}
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
};

export default React.memo(InfoItem);
