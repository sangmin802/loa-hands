import React, { useCallback } from 'react';
import {useSelector} from 'react-redux';
import * as Actions from '../../../actions';
import _ from '../../../Utility';
import {RouteComponentProps} from 'react-router';

// 컴포넌트
import UserInfo from '../Presentational/UserInfo';

// 타입
import {RootState} from '../../../store'

interface MatchParams {
  name : string
}

export interface IExpeditionPopToggle {
  (p1 : boolean) : void
}

export interface IChangeUserInfoMainTab {
  (p1 : number) : void
}

// Parameters유틸리티로 history타입 가져옴
export interface IGetUserData {
  (p1 : string, p2 : Parameters<typeof Actions.getUserData_Thunk>[1]) : void
}

const UserInfoContainer : React.FC<RouteComponentProps<MatchParams>> = ({
  match : {params : {name}}
}) => {
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
  return useSelector((state : RootState) => ({
    userData : state.userData,
    expeditionPop : state.expeditionPop,
    userInfoMainTab : state.userInfoMainTab,
  }), (left, right) => {
    if(_.compareObj(left, right)) return true;
    return false;
  })
}

function SetDispatchers(dispatch){
  const expeditionPopToggle : IExpeditionPopToggle = (bool) => {
    dispatch(Actions.expeditionPopToggle(bool));
  };
  const changeUserInfoMainTab : IChangeUserInfoMainTab = useCallback((index) => {
    dispatch(Actions.changeUserInfoMainTab(index));
  }, [])
  const getUserData : IGetUserData = (value, history) => {
    dispatch(Actions.getUserData_Thunk(value, history))
  };

  return {expeditionPopToggle, changeUserInfoMainTab, getUserData};
}

export default React.memo(UserInfoContainer, () => true);