import React from 'react';
import 'css/UserInfo.css';
import _ from 'utility';

import UserInfoBlank from 'components/userInfo-blank/index';
import {Selector} from 'store/controller/selector';
import {GetUserData} from 'hooks/getUserData';
import {UserInfoTab} from 'hooks/userInfoTab';

import UserExpeditionPop from 'components/userInfo-expeditionPop/index';
import UserBasicInfo from 'components/userInfo-basic/index';
import UserExpeditionChars from 'components/userInfo-expeditionChars/index';
import TabWrap from 'components/userInfo-tabWrap/index';
import UserCollection from 'components/userInfo-collectionNav/index';
import AbilityWrap from 'components/userInfo-abilityWrap/index';

// React.FC<RouteComponentProps<MatchParams>>

const UserInfo = ({
  match : {params : {name}}
}) => {
  const {userData} = Selector(['userData']);

  GetUserData(userData, name);
  UserInfoTab(userData);

  if(!userData) return <UserInfoBlank />
  

  return(
    <div className="userInfo">
      <div className="userInfoTop">
        <UserExpeditionPop />
        <UserBasicInfo />
        <UserExpeditionChars />
      </div>
      <div className="userInfoBottom">
        <TabWrap arr={['능력치', '스킬', '수집형포인트']} tabClass="main"/>
        <TabWrap arr={['장비', '아바타']} tabClass="sub"/>
        <TabWrap arr={['전투스킬', '생활스킬']} tabClass="sub"/>
        <TabWrap arr={UserCollection(userData.collectionMini)} tabClass="sub" />

        <div className="contentWrap">    
          <AbilityWrap />
        </div>
      </div>
    </div>
  )
}

export default React.memo(UserInfo, () => true);