import React from 'react';
import {useSelector} from 'react-redux';
import * as Actions from '../../../actions.ts';
import _ from '../../../Utility.js';

import Header from '../Presentational/Header.js';

function HeaderContainer(){
  const {dispatch} = _.GetHooks();
  const {homeData} = GetState();
  const {getUserData, setHomeData} = SetDispatchers(dispatch);
  return <Header 
            homeData={homeData}
            getUserData={getUserData}
            setHomeData={setHomeData}
         />
}

function GetState(){
  // return useSelector(state => state.homeData);
  return useSelector(state => ({
    homeData : state.homeData  
  }), 
  (left, right) => {
    if(_.compareObj(left.homeData, right.homeData)) return true;
    return false;
  });
}

function SetDispatchers(dispatch){
  const getUserData = (value, history) => {dispatch(Actions.getUserData_Thunk(value, history))};
  const setHomeData = (history) => {dispatch(Actions.setHomeData_Thunk(history))};

  return {getUserData, setHomeData};
}
export default React.memo(HeaderContainer, () => true);