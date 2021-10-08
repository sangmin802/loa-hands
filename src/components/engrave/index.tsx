import React from "react";
import DangerousHTML from "components/dangerous-html";
import Text from "components/text";
import * as Styled from "./index.style";

interface EngraveProps {
  data?: any;
}

const Engrave = ({ data }: EngraveProps) => {
  return (
    <Styled.Engrave className="engrave-item">
      <Styled.ImgAfter>
        <Styled.Thumbnail src={data.src} />
      </Styled.ImgAfter>
      <Styled.Desc>
        <Text>{data.name}</Text>
        <DangerousHTML html={data.options[data.grade - 1]} />
      </Styled.Desc>
    </Styled.Engrave>
  );
};

export default React.memo(Engrave);
