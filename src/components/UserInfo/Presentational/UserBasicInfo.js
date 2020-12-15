import React from 'react';
import _ from '../../../Utility.js';

// 컴포넌트
import CollectionImg from '../../@Shared/CollectionImg.js';

function UserBasicInfo({userData : {Lv, className, classSrc, curBigLv, curSamllLv, expeditionLv, garden, guild, pvp, reachBigLv, reachSamllLv, server, title, collectionMini, name}}){

  return (
    <div className="searchedUserInfo">
      <div className="userClass userInfoBox">
        <div className="userClassEmb">
          <img className="imgWidth" src={classSrc} alt={className} />
        </div>
        <div className="userClassName rem09">
          {className}
        </div>
      </div>
      <div className="userNameNLvNServer">
        <div className="userLvNname userInfoBox rem09 overflowDot">
          {Lv} {name}
        </div>
        <div className="userServer userInfoBox rem09 overflowDot">
          {server} <small>Lv {expeditionLv}</small>
        </div>
      </div>
      <div className="userItemLv">
        <div className="curUserItemLv userInfoBox">
          <div className="userInfoTitle rem09">
            현재 아이템 레벨
          </div>
          <div className="userInfoValue rem09">
            {curBigLv} <small>{curSamllLv}</small>
          </div>
        </div>
        <div className="reachUserItemLv userInfoBox">
          <div className="userInfoTitle rem09">
            달성 아이템 레벨
          </div>
          <div className="userInfoValue rem09">
            {reachBigLv} <small>{reachSamllLv}</small>
          </div>
        </div>
      </div>
      <div className="userExtraInfo userExtraInfo1">
        <div className="userGarden userInfoBox">
          <div className="userInfoTitle rem09">
            영지
          </div>
          <div className="userInfoValue rem09 overflowDot">
            {garden}
          </div>
        </div>
        <div className="userPvp userInfoBox">
          <div className="userInfoTitle rem09">
            PVP
          </div>
          <div className="userInfoValue rem09">
            {pvp}
          </div>
        </div>
      </div>
      <div className="userExtraInfo userExtraInfo1">
        <div className="userTitle userInfoBox">
          <div className="userInfoTitle rem09">
            칭호
          </div>
          <div className="userInfoValue rem09 overflowDot">
            {title}
          </div>
        </div>
        <div className="userTitle userInfoBox">
          <div className="userInfoTitle rem09">
            길드
          </div>
          <div className="userInfoValue rem09 overflowDot">
            {guild}
          </div>
        </div>
      </div>
      <div className="userInfoCollection">
        {
          collectionMini.map((col, index) => {
            return <CollectionImg 
                      key={`collectionMini${index}`}
                      index={index}
                      size={col.size}
                   />
          })
        }
      </div>
    </div>
  )
}

export default React.memo(UserBasicInfo, (prev, next) => {
  if(_.compareObj(prev, next)) return true;
  return false;
});