import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../actions.js';

function Home(router){
  const
    dispatch = useDispatch(),
    {homeData} = useSelector(state => ({
      homeData : state.homeData,
    }), (prev, next) => {
      if(!prev.homeData){
        return true
      }
    });
    // {homeData, setHomeData} = redux;
  if(!homeData){
    dispatch(Actions.setHomeData_Thunk());
    // setHomeData();
    return(
      <div className="home loading">
        로딩중
      </div>
    )
  }
  return(
    <div className="home">
      홈화면입니다
    </div>
  )
}

export default React.memo(Home, () => true);