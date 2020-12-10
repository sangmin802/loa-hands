import React from 'react';
import _ from '../../../Utility.js';

import {useSelector, shallowEqual} from 'react-redux';
import * as Actions from '../../../actions.js';

import UserDetailInfo from '../Presentational/UserDetailInfo.js';
import EquipList from '../../EquipList.js';
import UserAvatarList from '../Presentational/UserAvatarList.js';
import UserLifeSkillList from '../Presentational/UserLifeSkillList.js';
import UserBattleSkillList from '../Presentational/UserBattleSkillList.js';
import UserCollectionList from '../Presentational/UserCollectionList.js';
import Tab from '../../@Shared/Tab.js';
import UserItemHover from '../Presentational/UserItemHover.js'
import UserInfoEquipImg from '../Presentational/UserInfoEquipImg.js'
import ItemPartBox from '../../@Shared/ItemPartBox.js'
import IntentString from '../../@Shared/IntentString.js'
import SingleTextBox from '../../@Shared/SingleTextBox.js'

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
            UserAvatarList={UserAvatarList}
            UserLifeSkillList={UserLifeSkillList}
            UserBattleSkillList={UserBattleSkillList}
            UserCollectionList={UserCollectionList}
            Tab={Tab}
            UserItemHover={UserItemHover}
            UserInfoEquipImg={UserInfoEquipImg}
            ItemPartBox={ItemPartBox}
            IntentString={IntentString}
            SingleTextBox={SingleTextBox}
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