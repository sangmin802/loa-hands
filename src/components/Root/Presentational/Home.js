import React from 'react';

function Home({
  homeData, 
  Event, 
  TimerWrap, 
  dailyIsland, 
  fieldBoss, 
  chaosGate, 
  oceanCont
}){

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
          homeData.calendar.map((cal, index) => {
            if(cal.length !== 0){
              return(
                <div className={`calender${index}`} key={`calender${index}`}>
                  <TimerWrap data={cal} today={today} />
                </div>
              )
            }
            return null;
          })
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

export default Home;