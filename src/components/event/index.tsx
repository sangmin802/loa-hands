import React, { useCallback } from "react";
import { Image, Text } from "../";
import * as Styled from "./index.style";

const Event = ({ event }) => {
  const { date, href, img, name } = event;

  const goHref = useCallback(() => {
    window.open(`https://lostark.game.onstove.com/${href}`);
  }, [href]);

  return (
    <Styled.Container onClick={goHref}>
      <Image src={img} />
      <Styled.Desc>
        <Text>{name}</Text>
        <Text type="desc">{date}</Text>
      </Styled.Desc>
    </Styled.Container>
  );
};

export default Event;
