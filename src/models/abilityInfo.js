import EquipInfo from './equipInfo.js';
import SkillInfo from './skillInfo.js';

export default class AbilityInfo{
  constructor(script0, raw){
    this.equipInfo = [];
    this.skillInfo = null;
    const partsArr = ["000_weapon", "001_head", "002_shoulder", "003_cloth", "004_pants", "005_glove", "006_necklace", "007_earing1", "008_earing2", "009_ring1", "010_ring2", "011_stone", "012_av_weapon", "013_av_head", "014_av_cloth", "015_av_pants", "016_av_inst", "017_av_face1", "018_av_face2", "019_av_in_weapon", "020_av_in_head", "021_av_in_cloth", "022_av_in_pants"];

    const partsImg = ['/2018/obt/assets/images/common/game/bg_equipment_slot1.png?847938d1e0f475ca73717df97334937d', '/2018/obt/assets/images/common/game/bg_equipment_slot2.png?050db99e03db1afa7f32f00f53010a0a', '/2018/obt/assets/images/common/game/bg_equipment_slot3.png?ad02ff0c0c7f0f750d7254629f61f433', '/2018/obt/assets/images/common/game/bg_equipment_slot4.png?298c62509ce611528f532b8cd05c1de4', '/2018/obt/assets/images/common/game/bg_equipment_slot5.png?206f2a75948642dbd0cddc37dd8ed220', '/2018/obt/assets/images/common/game/bg_equipment_slot6.png?aac2a45f5db714c267e1c59e52dc4286', '/2018/obt/assets/images/common/game/bg_equipment_slot7.png?8fc19274483852c953d0d4d44ffed661', '/2018/obt/assets/images/common/game/bg_equipment_slot8.png?c3a33be4689986ee75e8a8432ee494d5', '/2018/obt/assets/images/common/game/bg_equipment_slot9.png?7326a4a95b92262ab12c1eb47656be34', '/2018/obt/assets/images/common/game/bg_equipment_slot10.png?aafc9248b55a32207e593b0f084905d2', '/2018/obt/assets/images/common/game/bg_equipment_slot11.png?ef291130164ed57acf5a308a3d89b898', '/2018/obt/assets/images/common/game/bg_equipment_slot12.png?152c1781684a979cc20a505b8af89cb3', '/2018/obt/assets/images/common/game/bg_avatar_slot1.png?9aa3bac1ce5aaa477bd3f829e5833d9f', '/2018/obt/assets/images/common/game/bg_avatar_slot3.png?27b016892d9a32cc5b8af5db3b179aa8', '/2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b', '/2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b', '/2018/obt/assets/images/common/game/bg_avatar_slot2.png?c29dbbf56163365571c4cbcf6804336a', '/2018/obt/assets/images/common/game/bg_avatar_slot4.png?620d5ebcc169ff61c4fc2411d0f5af35', '/2018/obt/assets/images/common/game/bg_avatar_slot5.png?88e22b7033cc6dae4325f4f68673be00', '/2018/obt/assets/images/common/game/bg_avatar_slot1.png?9aa3bac1ce5aaa477bd3f829e5833d9f', '/2018/obt/assets/images/common/game/bg_avatar_slot3.png?27b016892d9a32cc5b8af5db3b179aa8', '/2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b', '/2018/obt/assets/images/common/game/bg_avatar_slot6.png?edbe15fe183c44e05013953d0cdf4b7b'];
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