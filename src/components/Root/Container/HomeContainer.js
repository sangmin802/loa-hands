import React, {useEffect} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import * as Actions from '../../../actions.ts';
import {dailyIsland, fieldBoss, chaosGate, oceanCont} from '../../../JSON';
import _ from '../../../Utility';

import Event from '../Presentational/Event';
import Home from '../Presentational/Home';
import TimerWrap from '../Presentational/TimerWrap';


function HomeContainer(){
  const {dispatch} = _.GetHooks();
  const {homeData} = GetState();
  // 자정일 때, homeData 새롭게 받아와서 Home 다시 렌더링
  DateOver(dispatch);

  // 홈데이터 처음 생성
  if(!homeData){
    dispatch(Actions.setHomeData_Thunk());
    return null;
  };

  return <Home
            homeData={homeData}
            Event={Event}
            TimerWrap={TimerWrap}
            dailyIsland={dailyIsland}
            fieldBoss={fieldBoss}
            chaosGate={chaosGate}
            oceanCont={oceanCont}
         />
}

function GetState(){
  return useSelector(state => ({
    homeData : state.homeData,
  }), shallowEqual);
}

function DateOver(dispatch){
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
}

export default React.memo(HomeContainer, () => true);