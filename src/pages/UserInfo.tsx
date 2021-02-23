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
import TabWrap from 'components/_tabWrap/index';
import UserCollection from 'components/userInfo-collectionNav/index';
import AbilityWrap from 'components/userInfo-abilityWrap/index';
import SkillWrap from 'components/userInfo-skillWrap/index';

// React.FC<RouteComponentProps<MatchParams>>

const Index = ({
  match : {params : {name}}
}) => {
  const {userData} = Selector(['userData']);

  GetUserData(userData, name);
  UserInfoTab(userData);

  if(!userData) return <UserInfoBlank />
  console.log('탭기능 수정??')
  return(
    <div className="userInfo">
      <div className="userInfoTop">
        <UserExpeditionPop />
        <UserBasicInfo />
        <UserExpeditionChars />
      </div>
      <div className="userInfoBottom">
        <TabWrap arr={['능력치', '스킬', '수집형포인트']} tabClass="main"/>
        <TabWrap arr={['착용 아이템', '착용 아바타']} tabClass="sub"/>
        <TabWrap arr={['전투스킬', '생활스킬']} tabClass="sub"/>
        <TabWrap arr={UserCollection(userData.collectionMini)} tabClass="sub"/>
        <div className="tabContentWrap">
          <AbilityWrap />
          <SkillWrap />
          <div className="displayNone">
            <div className="displayNone">섬의마음</div>
            <div className="displayNone">오르페우스의 별</div>
            <div className="displayNone">거인의 심장</div>
            <div className="displayNone">미술품</div>
            <div className="displayNone">모코코</div>
            <div className="displayNone">모험물</div>
            <div className="displayNone">증표</div>
            <div className="displayNone">생활</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Index, () => true);