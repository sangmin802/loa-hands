import React from 'react';
import {useHistory} from 'react-router-dom';
import '../css/UserInfo.css';
import EquipImg from './EquipImg.js';
import EquipList from './EquipList.js';
import AvatarList from './AvatarList.js';

function UnserInfo(redux){
  const {userData, match : {params : {name}}, expeditionPop, equipTab, getUserData, expeditionPopToggle, changeEquipTab} = redux;
  const history = useHistory();
  const insertImgComp = function(arr, startNum, endNum){
    return arr.splice(startNum, endNum).map((equip, index) =>{
      return <EquipImg key={`EquipImg${index}`} data={equip}/>
    })
  }
  let displayPop = null;

  if(expeditionPop) displayPop = 'displayBlock';
  if(!userData){
    getUserData(name, history);
    return null;
  }else{
    const {Lv, className, classSrc, curBigLv, curSamllLv, equipInfo, expeditionLv, expeditionUserWrap, garden, guild, pvp, reachBigLv, reachSamllLv, server, title, classEngName} = userData;
    const [equipArr, avaterArr] = Object.keys(equipInfo)
    .reduce((prev, cur) => {
      if(!cur.includes('av_')){
        prev[0].push(equipInfo[cur])
      }else{
        prev[1].push({...equipInfo[cur], avatarPart : cur})
      }
      return prev;
    }, [[], []]);

    let bottomContent = null;
    switch(equipTab){
      case 0 :
        bottomContent = 
          [...equipArr].map((equip, index) => {
            return <EquipList data={equip} key={`equipList${index}`}/>
          })
      break;
      case 1 :
        bottomContent = <AvatarList data={avaterArr}/>;
      break;  
      default : return null;
    }

    return(
      <div className="userInfo">
        <div className="userInfoTopCetnerWrap">

          <div className="userInfoTop">
            <div className="showExpeditionWrap"
              onClick={() => {
                expeditionPopToggle(true)
              }}
            >
              원정대 캐릭터 보기
            </div>
            <div className="searchedUserInfo">
              <div className="userClass userInfoBox">
                <div className="userClassEmb">
                  <img className="imgWidth" src={classSrc} alt={className} />
                </div>
                <div className="userClassName rem11">
                  {className}
                </div>
              </div>
              <div className="userNameNLvNServer">
                <div className="userLvNname userInfoBox rem11 overflowDot">
                  {Lv} {name}
                </div>
                <div className="userServer userInfoBox rem11 overflowDot">
                  {server} <small>Lv {expeditionLv}</small>
                </div>
              </div>
              <div className="userItemLv">
                <div className="curUserItemLv userInfoBox">
                  <div className="userInfoTitle rem11">
                    현재 아이템 레벨
                  </div>
                  <div className="userInfoValue rem1">
                    {curBigLv} <small>{curSamllLv}</small>
                  </div>
                </div>
                <div className="reachUserItemLv userInfoBox">
                  <div className="userInfoTitle rem11">
                    달성 아이템 레벨
                  </div>
                  <div className="userInfoValue rem1">
                    {reachBigLv} <small>{reachSamllLv}</small>
                  </div>
                </div>
              </div>
              <div className="userExtraInfo">
                <div className="userGarden userInfoBox">
                  <div className="userInfoTitle rem11">
                    영지
                  </div>
                  <div className="userInfoValue rem1 overflowDot">
                    {garden}
                  </div>
                </div>
                <div className="userPvp userInfoBox">
                  <div className="userInfoTitle rem11">
                    PVP
                  </div>
                  <div className="userInfoValue rem1">
                    {pvp}
                  </div>
                </div>
                <div className="userTitle userInfoBox">
                  <div className="userInfoTitle rem11">
                    칭호
                  </div>
                  <div className="userInfoValue rem1 overflowDot">
                    {title}
                  </div>
                </div>
                <div className="userTitle userInfoBox">
                  <div className="userInfoTitle rem11">
                    길드
                  </div>
                  <div className="userInfoValue rem1 overflowDot">
                    {guild}
                  </div>
                </div>
              </div>
            </div>
            <div className={`searchedUserExpedition zIndex11 ${displayPop}`}>
              <div className="searchedUserExpeditionClose"
                onClick={() => {
                  expeditionPopToggle(false)
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
                              getUserData(char.name, history)
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
          <div className="userInfoBottomTabWrap">
            {['장비', '아바타'].map((tab, index) => {
              let target = null;
              if(index===equipTab) target = "tabTarget"
              return (
                <div className={`userInfoBottomTab ${target}`}
                  key={`userInfoBottomTab${index}`}
                  onClick={() => {
                      changeEquipTab(index)
                    }
                  }
                >
                  {tab}
                </div>
              )
            })}
          </div>
          {bottomContent}
        </div>
      </div>
    )
  }
}

export default UnserInfo;