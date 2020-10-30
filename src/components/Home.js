import React, {useEffect} from 'react';
import Event from './Event.js';

import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import TimerWrap from './TimerWrap.js';
import * as Actions from '../actions.js';

import {dailyIsland, fieldBoss, chaosGate} from '../JSON.js';

function Home(router){
  const
    dispatch = useDispatch(),
    state = useSelector(state => ({
      homeData : state.homeData,
    }), shallowEqual),
    {homeData} = state,
    today = new Date().getSeconds(),
    yoil = new Date().getDay();
  
  // 자정일 때, homeData 새롭게 받아와서 Home 다시 렌더링
  useEffect(() => {
    const checkNight = function(){
      const hour = new Date().getHours();
      const min = new Date().getMinutes();
      const sec = new Date().getSeconds();
      if(hour === 0 && min === 0 && sec === 0){
        dispatch(Actions.setHomeData_Thunk());
      }
    }
    const checkInterval = setInterval(checkNight, 1000);
    return () => {
      clearInterval(checkInterval)
    }
  }, [])

  if(!homeData){
    dispatch(Actions.setHomeData_Thunk());
    return(
      <div className="home loading">
        로딩중
      </div>
    )
  }
  const 
    {events} = homeData;

  return(
    <div className="home">
      <div className="events homeSection">
        <div className="homeSectionTitle rem1 textCenter">진행중인 이벤트</div>
        <div className="eventsWrap">
          {events.map((_event, index) => {
            return <Event event={_event} key={`event${index}`}/>
          })}
        </div>
      </div>
      <div className="dailyIsland homeSection">
        <div className="homeSectionTitle rem1 textCenter">오늘의 모험섬</div>
        <TimerWrap data={dailyIsland} today={today} contType='island'/>
      </div>
      <div className="dailyFieldBoss homeSection">
        <div className="homeSectionTitle rem1 textCenter">오늘의 필드보스</div>
        <TimerWrap data={fieldBoss[yoil]} today={today} contType='fieldBoss'/>
      </div>
      <div className="dailyChaosGate homeSection">
        <div className="homeSectionTitle rem1 textCenter">오늘의 카오스 게이트</div>
        <TimerWrap data={chaosGate[yoil]} today={today} contType='fieldBoss'/>
      </div>
    </div>
  )
}

export default React.memo(Home, () => true);