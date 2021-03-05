import React from 'react';
import _ from 'utility';
import {Selector} from 'store/controller/selector';
import './index.css'

// 컴포넌트
import UserInfoBox from './userInfoBox/index';
import UserCollection from 'components/userInfo-collectionNav/index'

const Index = () => {
  const {userData : {basicInfo, expeditionInfo, collectionInfo}} = Selector(['userData']);

  const {className, classSrc, curBigLv, curSamllLv, expeditionLv, garden, guild, pvp, reachBigLv, reachSamllLv, title} = basicInfo;
  const {name, server, Lv} = expeditionInfo;
  const {collectionMini} = collectionInfo;

  return (
    <div className="searchedUserInfo">
      <UserInfoBox>
        <div className="">
          <div className="userInfoTitle rem09">
            클래스
          </div>
          <div className="userInfoValue rem09" style={{
            'display' : 'flex',
            'alignItems' : 'center'
          }}>
            <img className="imgWidth userInfoImg" src={(classSrc as string)} alt={(className as string)} />
            <span className="rem09 overflowDot">{className}</span>
          </div>
        </div>
      </UserInfoBox>
      <UserInfoBox>
        <div className="">
          <div className="userInfoTitle rem09">
            이름
          </div>
          <div className="userInfoValue rem09">
            {Lv} {name}
          </div>
        </div>
        <div className="">
          <div className="userInfoTitle rem09">
            원정대 레벨
          </div>
          <div className="userInfoValue rem09">
          {server} <small>Lv {expeditionLv}</small>
          </div>
        </div>
      </UserInfoBox>
      <UserInfoBox>
        <div className="">
          <div className="userInfoTitle rem09">
            현재 아이템 레벨
          </div>
          <div className="userInfoValue rem09">
            {curBigLv} <small>{curSamllLv}</small>
          </div>
        </div>
        <div className="reachUserItemLv">
          <div className="userInfoTitle rem09">
            달성 아이템 레벨
          </div>
          <div className="userInfoValue rem09">
            {reachBigLv} <small>{reachSamllLv}</small>
          </div>
        </div>
      </UserInfoBox>
      <UserInfoBox>
        <div className="">
          <div className="userInfoTitle rem09">
            영지
          </div>
          <div className="userInfoValue rem09 overflowDot">
            {garden}
          </div>
        </div>
        <div className="">
          <div className="userInfoTitle rem09">
            PVP
          </div>
          <div className="userInfoValue rem09">
            {pvp}
          </div>
        </div>
      </UserInfoBox>
      <UserInfoBox>
        <div className="">
          <div className="userInfoTitle rem09">
            칭호
          </div>
          <div className="userInfoValue rem09 overflowDot">
            {title}
          </div>
        </div>
        <div className="">
          <div className="userInfoTitle rem09">
            길드
          </div>
          <div className="userInfoValue rem09 overflowDot">
            {guild}
          </div>
        </div>
      </UserInfoBox>
      <div className="userInfoCollection">
        {UserCollection(collectionMini)}
      </div>
    </div>
  )
}

export default React.memo(Index, () => true);