import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../css/UserInfo.css';
import EquipImg from './EquipImg.js';
import EquipList from './EquipList.js';

function UnserInfo(redux){
  const {userData, match : {params : {name}}, getUserData} = redux;
  const history = useHistory();
  const insertImgComp = function(arr, startNum, endNum){
    return arr.splice(startNum, endNum).map((equip, index) =>{
      return <EquipImg key={`EquipImg${index}`} data={equip}/>
    })
  }

  const [state, setState] = useState({pop : false})
  const {pop} = state;
  let displayPop = null;
  if(pop) displayPop = 'displayBlock';

  if(!userData){
    getUserData(name);
    return null;
  }else{
    const {equipInfo, classImg, classLogoImg, className, expeditionLv, itemLv, reachItemLv, userName, Lv, expeditionUserWrap} = userData;
    const equipArr = Object.values(equipInfo);
    
    return(
      <div className="userInfo">
        <div className="userInfoTopCetnerWrap">
          <div className="userInfoTop">
            <div className="showExpeditionWrap"
              onClick={() => {
                setState({...state, pop : true})
              }}
            >
              원정대 캐릭터 보기
            </div>
            <div className="searchedUserInfo">
              <div className="expeditionLv infoTopCont rem09">
                {expeditionLv}
              </div>
              <div className="itemLv infoTopCont">
                <div className="curItemLv rem09">
                  {itemLv}
                </div>
                <div className="reachItemLv rem09">
                  {reachItemLv}
                </div>
              </div>
              <div className="classNameLv infoTopCont">
                <div className="classNameWrap">
                  <div className="classLogo">
                    <img src={classLogoImg} alt={className}/>
                  </div>
                  <div className="className rem09">
                    {className}
                  </div>
                </div>
              </div>
              <div className="userNameLv infoTopCont overflowDot rem09">
                {Lv} {userName}
              </div>
            </div>
            <div className={`searchedUserExpedition zIndex11 ${displayPop}`}>
              <div className="searchedUserExpeditionClose"
                onClick={() => {
                  setState({...state, pop : false})
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
                          <div className="userExpeditionChar" key={`userExpeditionChar${index}`}
                            onClick={() => {
                              getUserData(char.name, history)
                              setState({...state, pop : false})
                            }}
                          >
                            <div className="userExpeditionCharImg">
                              <img className="imgWidth" src={char.classImg}/>
                            </div>
                            <div className="userExpeditionCharInfo rem11 overflowDot">
                              {char.Lv} {char.name}
                            </div>
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
              <img src={classImg} alt="classImg"/>
            </div>
            <div className="userInfoRight equipImgWrap">
              {insertImgComp([...equipArr], 6, 6)}
            </div>
          </div>
        </div>
        <div className="userInfoBottom">
          {[...equipArr].map((equip, index) => {
            return <EquipList data={equip} key={`equipList${index}`}/>
          })}
        </div>
      </div>
    )
  }
}

export default UnserInfo;