import React from 'react';

function Events({event}){
  const {date, href, img, name} = event;
  return(
    <div className="event"
      onClick={() => {
        window.open(`https://lostark.game.onstove.com/${href}`);
      }}
    >
      <div className="eventImg">
        <img className="imgWidth" src={img} alt={name} />
      </div>
      <div className="eventContent">
        <div className="eventName rem09 textCenter">{name}</div>
        <div className="eventDate rem08 textCenter">{date}</div>
      </div>
    </div>
  )
}

export default Events;