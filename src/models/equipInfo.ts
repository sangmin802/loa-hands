export default class EquipInfo {
  ItemTitle0? : {
    value : {
      slotData : {
        iconPath : string
        iconGrade : number
      }
    }
  }
  NameTagBox0? : {
    value : string
  }
  innerValid0? : string

  constructor(data){
    let sameDivideCount : number = 0;
    Object.values(data)
    .map((val : object) => {
      if(!val['type']) return {...val, type : 'innerValid'};
      return val;
    })
    .sort((a : object, b : object) => {
      const typeA = a['type'].toUpperCase(); 
      const typeB = b['type'].toUpperCase(); 
      if (typeA < typeB) return -1;
      if (typeA > typeB) return 1;
      return 0;
    })
    .reduce((prev, cur, index) => {
      if(index === 1) this[prev['type']+sameDivideCount] = prev;
      if(prev['type'] !== cur['type']){
        sameDivideCount = 0;
      }else{
        sameDivideCount++;
      }
      this[cur['type']+sameDivideCount] = cur;
      return cur;
    })
  }
}