import React from "react";
import Thumbnail from "components/thumbnail/index";
import TextContainer from "components/text-container";
import "./index.scss";

const Event = ({ event }) => {
  const { date, href, img, name } = event;
  const goHref = React.useCallback(() => {
    window.open(`https://lostark.game.onstove.com/${href}`);
  }, [href]);
  return (
    <div className="event" onClick={goHref}>
      <Thumbnail backSrc={img}>
        <TextContainer text={[name, date]} />
      </Thumbnail>
    </div>
  );
};

export default Event;
