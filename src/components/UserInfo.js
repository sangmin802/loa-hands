import React from 'react';


function UnserInfo(redux){
  const {userData, match : {params : {name}}} = redux;
  console.log(`${name} / 새로고침 시 해당 값으로 재검색`)
  console.log(userData)
  return(
    <div className="userInfo">
      유저정보입니다
    </div>
  )
}

export default UnserInfo;