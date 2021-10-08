import React, { useCallback } from "react";
import Image from "components/image";
import Text from "components/text";
import * as Styled from "./index.style";

interface IData {
  date: string;
  href: string;
  img: string;
  name: string;
}

interface IEvent<T> {
  event?: T;
}

const Event = ({ event, ...props }: IEvent<IData>) => {
  const { date, href, img, name } = event;

  const handleOpenEvent = useCallback(() => {
    window.open(`https://lostark.game.onstove.com/${href}`);
  }, [href]);

  return (
    <Styled.Container {...props} title="event" onClick={handleOpenEvent}>
      <Image src={img} />
      <Styled.Desc>
        <Text>{name}</Text>
        <Text type="desc">{date}</Text>
      </Styled.Desc>
    </Styled.Container>
  );
};

export default Event;
