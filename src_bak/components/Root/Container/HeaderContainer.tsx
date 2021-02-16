import React from 'react';
import {useSelector} from 'react-redux';
import * as Actions from '../../../store/controller/actions';
import _ from '../../../Utility';
import {RootState} from '../../../store/model/store';

import Header from '../Presentational/Header';

const HeaderContainer : React.FC = () => {
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
  return useSelector((state : RootState) => ({
    homeData : state.homeData
  }), 
  (left, right) => {
    if(_.compareObj(left.homeData, right.homeData)) return true;
    return false;
  });
}

function SetDispatchers(dispatch){
  const getUserData = (value, history) => {dispatch(Actions.getUserData_Saga_Async(value, history))};
  const setHomeData = (history) => {dispatch(Actions.setHomeData_Thunk(history))};

  return {getUserData, setHomeData};
}

export default React.memo(HeaderContainer, () => true);