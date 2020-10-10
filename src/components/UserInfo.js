import React from 'react';
import '../css/UserInfo.css';
import EquipImg from './EquipImg.js';

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
    const {equipInfo, classImg} = userData;
    const equipArr = Object.values(equipInfo);

    return(
      <div className="userInfo">
        <div className="userInfoTop">
          <div className="userInfoLeft absolute equipImgWrap">
            {insertImgComp([...equipArr], 0, 6)}
          </div>
          <div className="userClassImg">
            <img src={classImg} alt="classImg"/>
          </div>
          <div className="userInfoRight absolute equipImgWrap">
            {insertImgComp([...equipArr], 6, 6)}
          </div>
        </div>
        <div className="userInfoBottom">

        </div>
      </div>
    )
  }
}

export default UnserInfo;