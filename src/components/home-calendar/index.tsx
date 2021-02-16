import React from 'react';
import CalendarWrap from './calendar/index'

const Index = ({
  calendar,
  yoil,
  today
} : {
  calendar,
  yoil : number
  today : number
}) => {
  return(
    <div className="homeSection">
      <div className="homeSectionTitle rem1 textCenter">오늘의 캘린더섬</div>
      {
        yoil===0 || yoil===6 ? 
        calendar.map((cal, index) => {
          return <CalendarWrap cal={cal} index={index} today={today}/>
        })
        : 
        <CalendarWrap cal={calendar[1]} index={1} today={today}/>
      }
    </div>
  )
}

export default Index;