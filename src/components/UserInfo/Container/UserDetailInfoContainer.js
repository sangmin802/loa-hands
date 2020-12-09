import React from 'react';
import _ from '../../../Utility.js';

import {useSelector, shallowEqual} from 'react-redux';
import * as Actions from '../../../actions.js';

import UserDetailInfo from '../Presentational/UserDetailInfo.js';
import EquipList from '../../EquipList.js';
import AvatarList from '../../AvatarList.js';
import LifeSkillList from '../Presentational/LifeSkillList.js';
import BattleSkillList from '../../BattleSkillList.js';
import UserCollectionList from '../Presentational/UserCollectionList.js';
import Tab from '../../@Shared/Tab.js';

function UserDetailInfoContainer(){
  const {dispatch} = _.GetHooks();
  const {userData, userInfoSubTab, userInfoMainTab} = GetState();
  const {changeUserInfoSubTab} = SetDispatcher(dispatch)

  return <UserDetailInfo 
            changeUserInfoSubTab={changeUserInfoSubTab}
            userData={userData}
            userInfoSubTab={userInfoSubTab}
            userInfoMainTab={userInfoMainTab}
            EquipList={EquipList}
            AvatarList={AvatarList}
            LifeSkillList={LifeSkillList}
            BattleSkillList={BattleSkillList}
            UserCollectionList={UserCollectionList}
            Tab={Tab}
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