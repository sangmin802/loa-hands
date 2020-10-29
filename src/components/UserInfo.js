import React from 'react';
import {useHistory} from 'react-router-dom';
import '../css/UserInfo.css';
import Factory from '../factory.js';
import UserInfoEquipImg from './UserInfoEquipImg.js';

import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import * as Actions from '../actions.js';
import BottomContent from './BottomContent.js'

function UnserInfo(router){
  const
    dispatch = useDispatch(),
    {userData, expeditionPop, userInfoMainTab} = useSelector(state => ({
      userData : state.userData,
      expeditionPop : state.expeditionPop,
      userInfoMainTab : state.userInfoMainTab,
    }), shallowEqual),
    {match : {params : {name}}} = router,
    history = useHistory(),
    insertImgComp = function(arr, startNum, endNum){
      return arr.splice(startNum, endNum).map((equip, index) =>{
        return <UserInfoEquipImg key={`EquipImg${index}`} data={equip}/>
      })
    };
  let displayPop = null;
  if(expeditionPop) displayPop = 'displayBlock';
  if(!userData){
    dispatch(Actions.getUserData_Thunk(name, history));
    return null;
  }else{
    const {Lv, className, classSrc, curBigLv, curSamllLv, abilityInfo : {equipInfo}, expeditionLv, expeditionUserWrap, garden, guild, pvp, reachBigLv, reachSamllLv, server, title, classEngName, collectionMini} = userData;
    const [equipArr, ] = Factory.devideEquipInfo(equipInfo)
    return(
      <div className="userInfo">
        <div className="userInfoTopCetnerWrap">
          <div className="userInfoTop">
            <div className="showExpeditionWrap"
              onClick={() => {
                dispatch(Actions.expeditionPopToggle(true));
              }}
            >
              원정대 캐릭터 보기
            </div>
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
                    let position = '392px';
                    switch(index){
                      case 0 : 
                      break;
                      case 1 : position = '348px';
                      break;
                      case 2 : position = '278px';
                      break;
                      case 3 : position = '208px';
                      break;
                      case 4 : position = '326px';
                      break;
                      case 5 : position = '231px';
                      break;
                      case 6 : position = '301px';
                      break;
                      case 7 : position = '255px';
                      break;
                      default : return null;
                    }
                    return (
                      <div className="collectionMini" key={`collectionMini${index}`}>
                        <div className="collectionMiniBg"
                          style={{backgroundPosition : ` ${position} 110px`}}
                        ></div>
                        <div className="collectionMiniSize">
                          {col.size}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className={`searchedUserExpedition zIndex11 ${displayPop}`}>
              <div className="searchedUserExpeditionClose"
                onClick={() => {
                  dispatch(Actions.expeditionPopToggle(false));
                }}
              >
                닫기
              </div>
              {expeditionUserWrap.map((wrap, index) => {
                return(
                  <div className="userExpedition" key={`userExpedition${index}`}>
                    <div className="userExpeditionServer rem13">
                      {wrap.server}
                    </div>
                    <div className="userExpeditionCharWrap">
                      {wrap.charList.map((char, index) => {
                        return(
                          <div className="userExpeditionChar rem09 overflowDot" key={`userExpeditionChar${index}`}
                            onClick={() => {
                              dispatch(Actions.getUserData_Thunk(char.name, history));
                            }}
                          >
                            {char.lv} {char.name}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="userInfoCenter">
            <div className="userInfoLeft equipImgWrap">
              {insertImgComp([...equipArr], 0, 6)}
            </div>
            <div className="userClassImg">
              <img src={`http://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/${classEngName}.png`} alt="classImg"/>
            </div>
            <div className="userInfoRight equipImgWrap">
              {insertImgComp([...equipArr], 6, 6)}
            </div>
          </div>
        </div>
        <div className="userInfoBottom">
          <div className="userInfoBottomMainTabWrap">
            {['능력치','스킬' , '수집형포인트'].map((tab, index) => {
              let target = null;
              if(index===userInfoMainTab) target = "tabTarget"
              return (
                <div className={`userInfoBottomMainTab ${target}`}
                  key={`userInfoBottomMainTab${index}`}
                  onClick={() => {
                      dispatch(Actions.changeUserInfoMainTab(index));
                    }
                  }
                >
                  {tab}
                </div>
              )
            })}
          </div>
          <BottomContent />
        </div>
      </div>
    )
  }
}

export default React.memo(UnserInfo, () => true);