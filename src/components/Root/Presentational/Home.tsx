import React from 'react';
import HomeData from '../../../models/homeData';

// 컴포넌트
import Event from '../Presentational/Event';
import TimerWrap from '../Presentational/TimerWrap';

// 타입
import {IJson} from '../../../interface';

interface Props {
  dailyIsland : IJson[]
  fieldBoss : IJson[][]
  chaosGate : IJson[][]
  oceanCont : IJson[][]
  homeData : HomeData
}

const Home : React.FC<Props> = ({
  homeData, 
  dailyIsland, 
  fieldBoss, 
  chaosGate, 
  oceanCont
}) => {

  const today = new Date().getSeconds();
  const yoil = new Date().getDay();
  
  return(
    <div className="home">
      <div className="events homeSection">
        <div className="homeSectionTitle rem1 textCenter">진행중인 이벤트</div>
        <div className="eventsWrap">
          {
            homeData.events.map((_event, index) => {
              return <Event event={_event} key={`event${index}`}/>
            })
          }
        </div>
      </div>
      <div className="dailyCalendar homeSection">
        <div className="homeSectionTitle rem1 textCenter">오늘의 캘린더섬</div>
        {
          yoil===0 || yoil===6 ? 
          homeData.calendar.map((cal, index) => {
            return <CalendarWrap cal={cal} index={index} today={today}/>
          })
          : 
          <CalendarWrap cal={homeData.calendar[1]} index={1} today={today}/>
        }
      </div>
      <div className="dailyIsland homeSection">
        <div className="homeSectionTitle rem1 textCenter">오늘의 모험섬</div>
        <TimerWrap data={dailyIsland} today={today} />
      </div>
      <div className="dailyFieldBoss homeSection">
        <div className="homeSectionTitle rem1 textCenter">오늘의 필드보스</div>
        <TimerWrap data={fieldBoss[yoil]} today={today} />
      </div>
      <div className="dailyChaosGate homeSection">
        <div className="homeSectionTitle rem1 textCenter">오늘의 카오스 게이트</div>
        <TimerWrap data={chaosGate[yoil]} today={today} />
      </div>
      <div className="dailyOcean homeSection">
        <div className="homeSectionTitle rem1 textCenter">오늘의 항해</div>
        <TimerWrap data={oceanCont[yoil]} today={today} />
        <div className="alert rem08">
          항해 관문의 유지시간은 1분 입니다.
        </div>
      </div>
    </div>
  )
}

interface ICalendarWrap {
  index : number
  today : number
  cal : IJson[]
}

const CalendarWrap : React.FC<ICalendarWrap> = ({
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
      <TimerWrap data={cal} today={today} />
    </div>
  )
}

export default Home;