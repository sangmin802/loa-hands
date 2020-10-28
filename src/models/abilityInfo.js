import EquipInfo from './equipInfo.js';
import SkillInfo from './skillInfo.js';
import {partsArr, partsImg} from '../JSON.js'

export default class AbilityInfo{
  constructor(script0, raw){
    this.equipInfo = [];
    this.skillInfo = null;

    partsArr.forEach((part, index) => {
      this.equipInfo[part] = {partImg : partsImg[index]};
    })

    if(script0.childNodes[0].data.length!==1){
      const profileObj = JSON.parse(script0.childNodes[0].data.replace('$.Profile = {', '{').replace('};', "}"));
      // 장비설정
      this.setUserInfoEquip(profileObj.Equip, partsArr);

      // 스킬설정    
      this.skillInfo = new SkillInfo(profileObj.Skill, raw)
    }
  }

  setUserInfoEquip(equip, partsArr){
    const equipKeyArr = Object.keys(equip);
    equipKeyArr.forEach((key) => {
      const num = Number(key.substr(key.length-3, key.length))
      if(partsArr[num]){
        this.equipInfo[partsArr[num]].detail = new EquipInfo(equip[key], num);
      }
    })
  }
}