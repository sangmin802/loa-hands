import React from 'react';
import AccGem from './components/AccGem.js';

export default {
  getOnlyText(string){
    const newStr = string.replace(/<BR>/gi, "enter");
    const parsed = new DOMParser().parseFromString(newStr, "text/html").body.textContent;
    if(parsed.includes('enter')){
      const split = parsed.split('enter');
      return split.map((res, index) => {
        if(res!==""){
          return <div key={'enter'+index}>{res}</div>
        }
        return null;
      })
    }else{
      return new DOMParser().parseFromString(newStr, "text/html").body.textContent;
    }
  },

  multipleValues(_val){
    let resultArr = [];
    const keyArr = Object.keys(_val)
    keyArr.forEach(key => {
      if(typeof _val[key] === 'string'){
        resultArr.push(this.getOnlyText(_val[key]))
      }else{
        resultArr.push(_val[key])
      }
    })
    return resultArr;
  },

  getSameTypeObj(_arr, _type){
    return _arr.filter(res => {
      if(res){
        if(res.type===_type){
          return res;
        }
      }
      return null;
    })
  },

  itemPartBoxParser(_arr){
    return _arr.map(({value : {Element_000, Element_001}}, index) => {
      return (
        <div className="itemPartBox" key={'itemPartBox'+index}>
          <div className="itemPartBoxTitle rem11">{this.getOnlyText(Element_000)}</div>
          <div className="itemPartBoxContent rem09">{this.getOnlyText(Element_001)}</div>
        </div>
      )
    })
  },

  singleTextBoxParser(_arr){
    return _arr.map(({value}, index) => {
      return (
        <div className="singleText rem09" key={'singleText'+index}>
          {this.getOnlyText(value)}
        </div>
      )
    })
  },
  
  intentStringGroupParser(_arr){
    return _arr.map(intentString => {
      const {value} = intentString;
      return Object.values(value);
    })
    .map(el => {
      return el.map(({topStr, contentStr}, index) => {
        return (
          <div className="intentString" key={'intentString'+index}>
            <div className="intentStringTitle rem11">
              {this.getOnlyText(topStr)}
            </div>
            <div className="intentStringContentWrap">
              {
                Object.values(contentStr).map(({contentStr}, index) => {
                  return(
                    <div className="intentStringContent rem09" key={'intentStringContent'+index}>
                      {this.getOnlyText(contentStr)}
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      })
    })
  },

  tripodSkillCustomParser(_arr, type){
    return _arr.map(tripod => {
      const {value} = tripod;
      return Object.values(value);
    })
    .map(el => {
      return el.map((res, index) => {
        if(type === 'equip'){
          return (
            <AccGem data={res} key={'accGem'+index}/>
          )
        }
        return null;
      })
    })
  },
  
  fontColorForGrade(_grade){
    let color = null;
    switch(_grade){
      case 0 : color = {color : "#575757"};
      break;
      case 1 : color = {color : "#304911"};
      break;
      case 2 : color = {color : "#113d5d"};
      break;
      case 3 : color = {color : "#480d5d"};
      break;
      case 4 : color = {color : "#9e5f04"};
      break;
      case 5 : color = {color : "#a24006"};
      break;
      default : return null;
    }
    return color;
  },

  recursiveFunction(val, fun, name){
    return fun(val, fun, name);
  },

  createEquipListDetail(partImg, detail, pos){
    let result = 
      <div className="listDetail hoverContent"></div>
    if(detail){
      const 
        {ItemTitle0, NameTagBox0, equipGroupType} = detail,
        {value : {slotData : {iconPath, iconGrade}}} = ItemTitle0,
        [equipGrade,,tier, qualityValue] = this.multipleValues(ItemTitle0.value),
        itemName = this.getOnlyText(NameTagBox0.value),
        dataArray = Object.values(detail),
        SingleTextBox = this.getSameTypeObj(dataArray, "SingleTextBox"),
        ItemPartBox = this.getSameTypeObj(dataArray, "ItemPartBox");

      let 
        qualityColor = -2,
        qualityWrap = 
        <div className='listDetailQuality'>
          <div className={`qualityValue gradient${qualityColor}`} style={{width : `${qualityValue}%`}}/>
        </div>,
        TripodSkillCustomWrap = null,
        IndentStringWrap = null


      if(qualityValue >= 0 && qualityValue < 10){
        qualityColor = -1
      }else if(qualityValue >= 10 && qualityValue < 70){
        qualityColor = 1;
      }else if(qualityValue >= 70 && qualityValue < 90){
        qualityColor = 2;
      }else if(qualityValue >= 90){
        qualityColor = 3;
      }
     
      if(equipGroupType === "Acc"){
        const TripodSkillCustom = this.getSameTypeObj(dataArray, "TripodSkillCustom")
        TripodSkillCustomWrap = 
        <div className="tirpodSkillCustomWrap">
          {this.tripodSkillCustomParser(TripodSkillCustom, 'equip')}
        </div>
      }

      if(equipGroupType !== "Stone"){
        const IndentStringGroup = this.getSameTypeObj(dataArray, "IndentStringGroup");
        IndentStringWrap = 
          <div className="intentStringWrap">
            {this.intentStringGroupParser(IndentStringGroup)}
          </div>
      }else{
        qualityWrap = null;
      }

      result = 
        <div className={`listDetail hoverContent zIndex10 ${pos}`}>
          <div className="listDetailTop">
            <div className="listDetailImg">
              <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
              <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
            </div>
            <div className="listDetailMainInfo">
              <div className={`listDetailName overflowDot color${iconGrade} rem13`}>
                {itemName}
              </div>
              <div className={`listDetailGrade overflowDot color${iconGrade} rem1`}>
                {equipGrade}
              </div>
              <div className='listDetailTier overflowDot rem09'>
                {tier}
              </div>
              {qualityWrap}
            </div>
          </div>
          <div className="listDetailBottom">
            <div className="itemPartBoxWrap">
              {this.itemPartBoxParser(ItemPartBox)}
            </div>
            {IndentStringWrap}
            <div className="singleTextWrap">
              {this.singleTextBoxParser(SingleTextBox)}
            </div>
            {TripodSkillCustomWrap}
          </div>
        </div>
    }
    return result;
  },

  devideEquipInfo(equipInfo){
    return Object.keys(equipInfo)
    .reduce((prev, cur) => {
      if(!cur.includes('av_')){
        prev[0].push(equipInfo[cur])
      }else{
        prev[1].push({...equipInfo[cur], avatarPart : cur})
      }
      return prev;
    }, [[], []]);
  },
}