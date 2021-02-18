import EquipInfo from './equipInfo';
import SkillInfo from './skillInfo';
import {partsArr, partsImg} from '../JSON.js'

export interface IEquip {
  partImg : string
  detail? : EquipInfo
  equipGroupType? : string
}
export interface IAv extends IEquip {
  avatarPart : string
}
export interface IEquipInfo {
  [key : string] : IEquip
}

interface IProfileObj {
  Equip : object
  Skill : object
}

export default class AbilityInfo {
  equipInfo : IEquipInfo = {};
  skillInfo : SkillInfo
  constructor(script0 : Element, raw : Element){
    partsArr.forEach((part : string, index : number) => {
      let equipGroupType = null;
      if(index <= 22) equipGroupType = "InnerAv";
      if(index <= 18) equipGroupType = "OuterAv";
      if(index === 11) equipGroupType = "Stone";
      if(index <= 10) equipGroupType = "Acc";
      if(index <= 5) equipGroupType = "Equip";
  
      this.equipInfo[part] = {partImg : partsImg[index], equipGroupType};
    })

    if(script0.childNodes[0].textContent.length!==1){
      const profileObj : IProfileObj = JSON.parse(script0.childNodes[0].textContent.replace('$.Profile = {', '{').replace('};', "}"));
      // 장비설정
      this.setUserInfoEquip(profileObj.Equip, partsArr);

      // 스킬설정    
      this.skillInfo = new SkillInfo(profileObj.Skill, raw)
    }
  }

  setUserInfoEquip(equip, partsArr : string[]){
    const equipKeyArr = Object.keys(equip);
    equipKeyArr.forEach((key : string) => {
      const num = Number(key.substr(key.length-3, key.length))
      if(partsArr[num]){
        const target = this.equipInfo[partsArr[num]];

        target.detail = new EquipInfo(equip[key]);
      }
    })
  }
}