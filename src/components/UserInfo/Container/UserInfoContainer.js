import React, { useCallback } from 'react';
import {useSelector} from 'react-redux';
import * as Actions from '../../../actions.ts';
import _ from '../../../Utility';

// 컴포넌트
import UserInfo from '../Presentational/UserInfo';


function UserInfoContainer({match : {params : {name}}}){
  const {history, dispatch} = _.GetHooks();
  const {userData, expeditionPop, userInfoMainTab} = GetState();
  const {expeditionPopToggle, changeUserInfoMainTab, getUserData} = SetDispatchers(dispatch)

  if(!userData){
    dispatch(Actions.getUserData_Thunk(name, history));
    return null;
  }
  return <UserInfo 
            userData={userData}
            getUserData={getUserData}
            expeditionPop={expeditionPop}
            expeditionPopToggle={expeditionPopToggle}
            userInfoMainTab={userInfoMainTab}
            changeUserInfoMainTab={changeUserInfoMainTab}
         />
}

function GetState(){
  return useSelector(state => ({
    userData : state.userData,
    expeditionPop : state.expeditionPop,
    userInfoMainTab : state.userInfoMainTab,
  }), (left, right) => {
    if(_.compareObj(left, right)) return true;
    return false;
  })
}

function SetDispatchers(dispatch){
  const expeditionPopToggle = (bool) => {dispatch(Actions.expeditionPopToggle(bool));};
  const changeUserInfoMainTab = useCallback((index) => {dispatch(Actions.changeUserInfoMainTab(index));})
  const getUserData = (value, history) => {dispatch(Actions.getUserData_Thunk(value, history))};

  return {expeditionPopToggle, changeUserInfoMainTab, getUserData};
}

export default React.memo(UserInfoContainer, () => true);