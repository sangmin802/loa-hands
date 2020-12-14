export default class EquipInfo {
  constructor(data, num){
    let setPropsType = [];
    let sameDivideCount = 0;
    // if(num < 6){
    //   setPropsType = ["NameTagBox0", "ItemTitle0", "MultiTextBox0", "ItemPartBox0", "ItemPartBox1", "Progress0", "IndentStringGroup0", "IndentStringGroup1", "SingleTextBox0", "SingleTextBox1", "SingleTextBox2", "ShowMeTheMoney0"];
    //   this.equipGroupType = 'Equip';
    // }else if(5 < num && num < 11){
    //   setPropsType = ["NameTagBox0", "ItemTitle0", "MultiTextBox0", "ItemPartBox0", "ItemPartBox1", "ItemPartBox2", "TripodSkillCustom0", "SingleTextBox0", "SingleTextBox1", "SingleTextBox2"];
    //   if(num===9 || num===10){
    //     setPropsType.push("ItemPartBox3")
    //   }
    //   this.equipGroupType = "Acc";
    // }else if(num === 11){
    //   setPropsType = ["NameTagBox0", "ItemTitle0", "MultiTextBox0", "ItemPartBox0", "ItemPartBox1", "ItemPartBox2", "SingleTextBox0", "SingleTextBox1"];
    //   this.equipGroupType = "Stone";
    // }

    // setPropsType.forEach(res => {
    //   this[res] = null;
    // })
    
    if(num < 6) this.equipGroupType = 'Equip';
    if(5 < num && num < 11) this.equipGroupType = "Acc";
    if(num === 11) this.equipGroupType = "Stone";

    Object.values(data)
    .map(val => {
      // if(!val.type){
      //   val.type = 'innerValid'
      //   return val;
      // }else{
      //   return val;
      // }
      if(!val.type) return {...val, type : 'innerValid'};
      return val;
    })
    .sort((a, b) => {
      const typeA = a.type.toUpperCase(); 
      const typeB = b.type.toUpperCase(); 
      if (typeA < typeB) return -1;
      if (typeA > typeB) return 1;
      return 0;
    })
    .reduce((prev, cur, index) => {
      if(index === 1) this[prev.type+sameDivideCount] = prev;
      if(prev.type !== cur.type){
        sameDivideCount = 0;
      }else{
        sameDivideCount++;
      }
      this[cur.type+sameDivideCount] = cur;
      return cur;
    })
  }
}