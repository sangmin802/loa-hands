import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import * as Actions from '../../../actions.js';
import _ from '../../../Utility.js';

import UserDetailInfoContainer from './UserDetailInfoContainer.js';
import UserInfoEquipImg from '../Presentational/UserInfoEquipImg.js';
import UserInfo from '../Presentational/UserInfo.js';
import UserBasicInfo from '../Presentational/UserBasicInfo.js';
import UserExpedition from '../Presentational/UserExpedition.js';
import Tab from '../../@Shared/Tab.js';


function UserInfoContainer({match : {params : {name}}}){
  const {history, dispatch} = _.GetHooks();
  const {userData, expeditionPop, userInfoMainTab} = GetState();
  const {expeditionPopToggle, changeUserInfoMainTab, getUserData} = SetDispatchers(dispatch)

  if(!userData){
    dispatch(Actions.getUserData_Thunk(name, history));
    return null;
  }
  return <UserInfo 
            history={history}
            userData={userData}
            getUserData={getUserData}
            expeditionPop={expeditionPop}
            expeditionPopToggle={expeditionPopToggle}
            userInfoMainTab={userInfoMainTab}
            changeUserInfoMainTab={changeUserInfoMainTab}
            UserDetailInfoContainer={UserDetailInfoContainer}
            UserInfoEquipImg={UserInfoEquipImg}
            UserBasicInfo={UserBasicInfo}
            UserExpedition={UserExpedition}
            Tab={Tab}
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