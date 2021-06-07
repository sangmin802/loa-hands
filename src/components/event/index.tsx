import React, { useCallback } from "react";
import { Thumbnail, TextContainer, Image } from "../";
import "./index.scss";

const Event = ({ event }) => {
  const { date, href, img, name } = event;

  const goHref = useCallback(() => {
    window.open(`https://lostark.game.onstove.com/${href}`);
  }, [href]);

  return (
    <div className="event" onClick={goHref}>
      <Thumbnail>
        <Image src={img} />
        <TextContainer text={[name, date]} />
      </Thumbnail>
    </div>
  );
};

export default Event;
