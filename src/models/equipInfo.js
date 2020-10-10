export default class EquipInfo{
  constructor(script0){
    const partsArr = ["000_head", "001_shoulder", "002_cloth", "003_pants", "004_glove", "005_weapon", "006_necklace", "007_earing1", "008_earing2", "009_ring1", "010_ring2", "011_stone"];
    const partsImg = ['/2018/obt/assets/images/common/game/bg_equipment_slot1.png?847938d1e0f475ca73717df97334937d', '/2018/obt/assets/images/common/game/bg_equipment_slot2.png?050db99e03db1afa7f32f00f53010a0a', '/2018/obt/assets/images/common/game/bg_equipment_slot3.png?ad02ff0c0c7f0f750d7254629f61f433', '/2018/obt/assets/images/common/game/bg_equipment_slot4.png?298c62509ce611528f532b8cd05c1de4', '/2018/obt/assets/images/common/game/bg_equipment_slot5.png?206f2a75948642dbd0cddc37dd8ed220', '/2018/obt/assets/images/common/game/bg_equipment_slot6.png?aac2a45f5db714c267e1c59e52dc4286', '/2018/obt/assets/images/common/game/bg_equipment_slot7.png?8fc19274483852c953d0d4d44ffed661', '/2018/obt/assets/images/common/game/bg_equipment_slot8.png?c3a33be4689986ee75e8a8432ee494d5', '/2018/obt/assets/images/common/game/bg_equipment_slot9.png?7326a4a95b92262ab12c1eb47656be34', '/2018/obt/assets/images/common/game/bg_equipment_slot10.png?aafc9248b55a32207e593b0f084905d2', '/2018/obt/assets/images/common/game/bg_equipment_slot11.png?ef291130164ed57acf5a308a3d89b898', '/2018/obt/assets/images/common/game/bg_equipment_slot12.png?152c1781684a979cc20a505b8af89cb3'];
    partsArr.forEach((part, index) => {
      this[part] = {partImg : partsImg[index]};
    })

    if(script0.childNodes[0].data.length!==1){
      const equip = JSON.parse(script0.childNodes[0].data.replace('$.Profile = {', '{').replace('};', "}")).Equip;
      const equipKeyArr = Object.keys(equip)
      equipKeyArr.forEach((key) => {
        const num = Number(key.substr(key.length-3, key.length))
        if(partsArr[num]){
          this[partsArr[num]].detail = equip[key];
        }
      })
    }
  }
}