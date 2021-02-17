import React from 'react';
import 'css/UserInfo.css';
import _ from 'utility';

import UserInfoBlank from 'components/userInfo-blank/index';
import {Selector} from 'store/controller/selector';
import {GetUserData} from 'hooks/getUserData'

import UserExpeditionPop from 'components/userInfo-expeditionPop/index';
import UserBasicInfo from 'components/userInfo-basic/index';
import UserExpeditionChars from 'components/userInfo-expeditionChars/index';

// React.FC<RouteComponentProps<MatchParams>>

const UserInfo = ({
  match : {params : {name}}
}) => {
  const {userData} = Selector(['userData']);

  GetUserData(userData, name);
  
  if(!userData) return <UserInfoBlank />

  return(
    <div className="userInfo">
      <div className="userInfoTop">
        <UserExpeditionPop />
        <UserBasicInfo />
        <UserExpeditionChars />
      </div>
      <div className="userInfoBottom">
        
      </div>
    </div>
  )
}

export default React.memo(UserInfo, () => true);