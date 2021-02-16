import React from 'react';
import TimerWrap from './timerWrap/index'

const Index = ({text, data, today}) => {

  return (
    <div className="homeSection">
      <div className="homeSectionTitle rem1 textCenter">{text}</div>
      <TimerWrap data={data} today={today} />
    </div>
  )
}

export default Index;