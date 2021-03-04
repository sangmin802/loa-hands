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
// import WrapAbility from 'components/userInfo-wrapAbility/index';
// import WrapSkill from 'components/userInfo-wrapSkill/index';
// import WrapCollection from 'components/userInfo-wrapCollection/index';
import DoubleColumnWrap from 'components/_doubleColumnWrap/index';
// React.FC<RouteComponentProps<MatchParams>>

const Index = ({
  match : {params : {name}}
}) => {
  const {userData} = Selector(['userData']);

  GetUserData(userData, name);
  UserInfoTab(userData);
  if(!userData) return <UserInfoBlank />
  
  // console.log(userData)
  const [av, equip] = _.arrayReducer(Object.values(userData.abilityInfo.equipInfo), 'Av')
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
          <div className="abilityWrap">
            <DoubleColumnWrap 
              data={equip}
              type="Equip"
            />
            <DoubleColumnWrap 
              data={av}
              type="Inner"
            />
          </div>
          {/* <WrapAbility />
          <WrapSkill />
          <WrapCollection /> */}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Index, () => true);