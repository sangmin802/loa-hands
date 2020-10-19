import React from 'react';
import Factory from '../factory.js'
import EquipList from './EquipList.js';
import AvatarList from './AvatarList.js';

function BottomContent(redux){
  const 
    {userData, userInfoSubTab, changeUserInfoSubTab, userInfoMainTab} = redux,
    {equipInfo} = userData,
    [equipArr, avaterArr] = Factory.devideEquipInfo(equipInfo)
  
  let 
    content = null,
    subTabArr = [];
  
  switch(userInfoMainTab){
    case 0 :
      subTabArr = ['장비', '아바타'];
      switch(userInfoSubTab){
        case 0 : 
          content = 
            [...equipArr].map((equip, index) => {
              return <EquipList data={equip} key={`equipList${index}`}/>
            })
        break;
        case 1 :
          content = <AvatarList data={avaterArr}/>;
        break;
        default : return null;
      }
    break;
    case 1 :
      subTabArr = userData.collectionMini.map(res => res.name);
      const 
        targetCollection = userData.collectionDetail[userInfoSubTab],
        {detail, getCount, title, totalCount} = targetCollection;
      content = 
      <div className="userCollectionWrap">
        <div className="userCollectionTitle textCenter">{title}</div>
        <div className="userCollectionCount textCenter rem09">
          {getCount} / {totalCount}
        </div>
        <div className="userCollectionDetailWrap">
        {detail.reduce((prev, cur) => {
          if(cur.isGet){
            prev[0].push(cur)
          }else{
            prev[1].push(cur)
          }
          return prev;
        }, [[],[]])
        .map((arr, index) => {
          const side = index === 0 ? 'Right' : 'Left';
          return (
            <div className={`userCollectionSide userCollection${side}`} key={`userCollectionSide${side}`}>
              <div className="userCollectionIsGet">
                {index === 0 ? '획득' : '미획득'}
              </div>
              {arr.map((col, index) => {
                return (
                  <div className="userCollection" key={`userCollection${index}`}>
                    <div className="userCollectionNo">{col.no}.</div>
                    <div className="userCollectionName">{col.name}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
        </div>
      </div>
    break;
    default : return null;
  }

  return(
    <div className="bottomContent">
      <div className="userInfoBottomSubTabWrap">
        {subTabArr.map((tab, index) => {
          let target = null;
          if(index===userInfoSubTab) target = "tabTarget"
          return (
            <div className={`userInfoBottomSubTab ${target} textCenter`}
              key={`userInfoBottomSubTab${index}`}
              onClick={() => {
                  changeUserInfoSubTab(index)
                }
              }
            >
              {tab}
            </div>
          )
        })}
      </div>
      {content}
    </div>
  )
}

export default BottomContent;