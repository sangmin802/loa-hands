import React from 'react';
import EquipImg from './EquipImg.js';
import Factory from '../factory.js';

function AvatarList({data}){
  const [weapon, inst, head, face, cloth, pants] = data.reduce((prev, cur) => {
    let num = null;
    if(cur.avatarPart.includes("weapon")){
      num = 0;
    }else if(cur.avatarPart.includes("inst")){
      num = 1;
    }else if(cur.avatarPart.includes("head")){
      num = 2;
    }else if(cur.avatarPart.includes("face")){
      num = 3;
    }else if(cur.avatarPart.includes("cloth")){
      num = 4;
    }else if(cur.avatarPart.includes("pants")){
      num = 5;
    }
    prev[num].push(cur)
    return prev;
  }, [[],[],[],[],[],[]])
  
  return(
    <div className="avatarList">
      <div className="avatarListLeft">
        {createAvatarDiv(weapon, 'Weapon')}
        {createAvatarDiv(inst, 'Inst')}
      </div>
      <div className="avatarListRight">
        {createAvatarDiv(head, 'Head', 'PosChange')}
        {createAvatarDiv(face, 'Face', 'PosChange')}
        {createAvatarDiv(cloth, 'Cloth', 'PosChange')}
        {createAvatarDiv(pants, 'Pants', 'PosChange')}
      </div>
    </div>
  )
}

function createAvatarDiv(arr, avatarPart, pos){
  let flex = 'normal';
  if(avatarPart === 'Face') flex = 'column';
  return (
    <div className={`avatarPartWrap avatar${avatarPart} flex${flex}`}>
      {arr.map((res, index) => {
        const {partImg, detail} = res;
        let equipListDetail = null;
        if(detail){
          equipListDetail = Factory.createEquipListDetail(partImg, detail, pos)
        }
        return (
          <div className="avatarWrap" key={`avatar${index}`}>
            {equipListDetail}
            <EquipImg data={res}/>
          </div>
        )
      })}
    </div>
  )
}
export default AvatarList;