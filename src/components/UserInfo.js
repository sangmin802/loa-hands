import React from 'react';
import '../css/UserInfo.css';
import EquipImg from './EquipImg.js';
import EquipList from './EquipList.js';

function UnserInfo(redux){
  const {userData, match : {params : {name}}, getUserData} = redux;
  const insertImgComp = function(arr, startNum, endNum){
    return arr.splice(startNum, endNum).map((equip, index) =>{
      return <EquipImg key={`EquipImg${index}`} data={equip}/>
    })
  }

  if(!userData){
    getUserData(name);
    return null;
  }else{
    const {equipInfo, classImg, classLogoImg, className, expeditionLv, itemLv, reachItemLv, userName, Lv} = userData;
    const equipArr = Object.values(equipInfo);

    return(
      <div className="userInfo">
        <div className="userInfoTopCetnerWrap">
          <div className="userInfoTop">
            <div className="expeditionLv infoTopCont">
              {expeditionLv}
            </div>
            <div className="itemLv infoTopCont">
              <div className="curItemLv">
                {itemLv}
              </div>
              <div className="reachItemLv">
                {reachItemLv}
              </div>
            </div>
            <div className="classNameLv infoTopCont">
              <div className="classNameWrap">
                <div className="classLogo">
                  <img src={classLogoImg} alt={className}/>
                </div>
                <div className="className">
                  {className}
                </div>
              </div>
            </div>
            <div className="userNameLv infoTopCont">
              {Lv} {userName}
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