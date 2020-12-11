import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import * as Actions from '../../../actions.js';
import _ from '../../../Utility.js';

// 컴포넌트
import UserInfo from '../Presentational/UserInfo.js';


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
  }), shallowEqual)
}

function SetDispatchers(dispatch){
  const expeditionPopToggle = (bool) => {dispatch(Actions.expeditionPopToggle(bool));};
  const changeUserInfoMainTab = (index) => {dispatch(Actions.changeUserInfoMainTab(index));};
  const getUserData = (value, history) => {dispatch(Actions.getUserData_Thunk(value, history))};

  return {expeditionPopToggle, changeUserInfoMainTab, getUserData};
}

export default React.memo(UserInfoContainer, () => true);