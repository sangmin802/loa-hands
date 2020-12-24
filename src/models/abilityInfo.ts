import EquipInfo from './equipInfo';
import SkillInfo from './skillInfo';
import {partsArr, partsImg} from '../JSON.js'

interface IEquipInfo {
  [key : string] : {
    partImg : string
    detail? : EquipInfo
  }
}

interface IUnknownObj {
  [key : string] : {}
}

export default class AbilityInfo {
  equipInfo : IEquipInfo = {};
  skillInfo : SkillInfo<IUnknownObj> = null;
  constructor(script0 : Element, raw : Element){
    partsArr.forEach((part : string, index : number) => {
      this.equipInfo[part] = {partImg : partsImg[index]};
    })

    if(script0.childNodes[0].textContent.length!==1){
      const profileObj : IUnknownObj = JSON.parse(script0.childNodes[0].textContent.replace('$.Profile = {', '{').replace('};', "}"));
      // 장비설정
      this.setUserInfoEquip(profileObj.Equip, partsArr);

      // 스킬설정    
      this.skillInfo = new SkillInfo<IUnknownObj>(profileObj.Skill, raw)
    }
  }

  setUserInfoEquip(equip : IUnknownObj, partsArr : string[]){
    const equipKeyArr = Object.keys(equip);
    equipKeyArr.forEach((key : string) => {
      const num = Number(key.substr(key.length-3, key.length))
      if(partsArr[num]) this.equipInfo[partsArr[num]].detail = new EquipInfo(equip[key], num);
    })
  }
}