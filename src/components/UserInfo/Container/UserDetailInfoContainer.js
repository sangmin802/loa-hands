import React from 'react';
import _ from '../../../Utility.js';
import {useSelector, shallowEqual} from 'react-redux';
import * as Actions from '../../../actions.js';

// 컴포넌트
import UserDetailInfo from '../Presentational/UserDetailInfo.js';

function UserDetailInfoContainer(){
  const {dispatch} = _.GetHooks();
  const {userData, userInfoSubTab, userInfoMainTab} = GetState();
  const {changeUserInfoSubTab} = SetDispatcher(dispatch)

  return <UserDetailInfo 
            changeUserInfoSubTab={changeUserInfoSubTab}
            userData={userData}
            userInfoSubTab={userInfoSubTab}
            userInfoMainTab={userInfoMainTab}
         />
}

function GetState(){
  return useSelector(state => ({
    userData : state.userData,
    userInfoSubTab : state.userInfoSubTab,
    userInfoMainTab : state.userInfoMainTab
  }), shallowEqual);
}

function SetDispatcher(dispatch){
  const changeUserInfoSubTab = (index) => {dispatch(Actions.changeUserInfoSubTab(index))};

  return {changeUserInfoSubTab};
}

export default React.memo(UserDetailInfoContainer, () => true);