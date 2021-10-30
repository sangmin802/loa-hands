import React, { useCallback } from "react";
import Image from "components/image/image";
import Text from "components/text/text";
import * as Styled from "./eventItem.style";

export interface EventProps {
  data: {
    date: string;
    href: string;
    img: string;
    name: string;
  };
}

function Event({ data, ...props }: EventProps) {
  const { date, href, img, name } = data;

  const handleOpenEvent = useCallback(() => {
    window.open(`https://lostark.game.onstove.com/${href}`);
  }, [href]);

  return (
    <Styled.Container {...props} title="event" onClick={handleOpenEvent}>
      <Image src={img} />
      <Styled.Desc>
        <Text>{name}</Text>
        <Text size="0.9">{date}</Text>
      </Styled.Desc>
    </Styled.Container>
  );
}

export default Event;
