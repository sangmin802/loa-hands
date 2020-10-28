import React from 'react';
import Event from './Event.js';

import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import TimerWrap from './TimerWrap.js';
import * as Actions from '../actions.js';

import {dailyIsland} from '../JSON.js'

function Home(router){
  const
    dispatch = useDispatch(),
    state = useSelector(state => ({
      homeData : state.homeData,
    }), shallowEqual),
    {homeData} = state;

    if(!homeData){
      dispatch(Actions.setHomeData_Thunk());
      return(
        <div className="home loading">
        로딩중
      </div>
    )
  }

  const {events} = homeData;

  return(
    <div className="home">
      <div className="events homeSection">
        <div className="homeSectionTitle rem1">진행중인 이벤트</div>
        <div className="eventsWrap">
          {events.map((_event, index) => {
            return <Event event={_event} key={`event${index}`}/>
          })}
        </div>
      </div>
      <div className="dailyIsland homeSection">
        <div className="homeSectionTitle rem1">일간 모험섬</div>
        <TimerWrap data={dailyIsland}/>
      </div>
    </div>
  )
}

export default React.memo(Home, () => true);