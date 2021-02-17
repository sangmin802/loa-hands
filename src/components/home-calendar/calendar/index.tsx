import React from 'react';

import {IJson} from 'types/home';
import TimerWrap from 'components/home-timerSection/timerWrap/index'

import './index.css';

interface ICalendarWrap {
  index : number
  today : number
  cal : IJson[]
}

const Index : React.FC<ICalendarWrap> = ({
  index,
  today,
  cal,
}) => {
  const calendarTitle = index===0? '14:00' : '21:00';
  return (
    <div className={`calendar${index} calendar`} key={`calendar${index}`}>
      <div className="calendarTitle textCenter">
        {calendarTitle}
      </div>
      {
        cal.length!==0 ?
        <TimerWrap data={cal} today={today} />
        :
        <div className="noTimerContent textCenter rem08">다음에 만나요</div>
      }
    </div>
  )
}

export default Index;