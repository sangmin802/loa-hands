export default class EquipInfo{
  constructor(script0){
    const partsArr = ["weapon", "head", "cloth", "pants", "glove", "shoulder", "necklace", "earing1", "earing2", "ring1", "ring2", "stone"];

    if(script0.childNodes[0].data.length===1){
      partsArr.forEach(part => {
        this[part] = null;
      })
    }else{
      const equip = JSON.parse(script0.childNodes[0].data.replace('$.Profile = {', '{').replace('};', "}")).Equip;
      const equipKeyArr = Object.keys(equip)
      equipKeyArr.forEach(key => {
        const num = Number(key.substr(key.length-3, key.length))
        this[partsArr[num]] = equip[key]
      })
    }
  }
}