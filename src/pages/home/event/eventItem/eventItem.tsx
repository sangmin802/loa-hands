import React, { useCallback } from "react";
import Image from "components/image";
import Text from "components/text";
import * as Styled from "./eventItem.style";

interface EventProps {
  data: {
    date: string;
    href: string;
    img: string;
    name: string;
  };
}

const Event = ({ data, ...props }: EventProps) => {
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
};

export default Event;
