import React from 'react';

export default {
  // 문자열을 Element화 해서, Body부분만 반환
  returnBody(data){
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const body = doc.getElementsByTagName('body')[0];
    
    return body;
  },

  // 태그가 포함된 문자열에서 태그를 제외한 문자열만 반환
  // BR태그가 있다면, div태그로 줄바꿈되도록 하고 {}를 통해 읽을수 있게 처리
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
      return parsed;
    }
  },

  // 여러개의 value값(string, 그 외)을 가진 객체의 값들만 배열로 추출
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

  // 동일한 타입을 가진 객체만 찾아서 반환
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

  // 객체 타입 : itemPartBox 분석기
  itemPartBoxParser(_arr){
    return _arr.map(({value : {Element_000, Element_001}}, index) => {
      return (
        <div className="itemPartBox" key={'itemPartBox'+index}>
          <div className="itemPartBoxTitle rem09">{this.getOnlyText(Element_000)}</div>
          <div className="itemPartBoxContent rem09">{this.getOnlyText(Element_001)}</div>
        </div>
      )
    })
  },

  // 객체 타입 : singleTextBox 분석기
  singleTextBoxParser(_arr){
    return _arr.map(({value}, index) => {
      return (
        <div className="singleText rem09" key={'singleText'+index}>
          {this.getOnlyText(value)}
        </div>
      )
    })
  },
  
  // 객체 타입 : intentStringGroup 분석기
  intentStringGroupParser(_arr){
    return _arr.map(intentString => {
      const {value} = intentString;
      return Object.values(value);
    })
    .map(el => {
      return el.map(({topStr, contentStr}, index) => {
        return (
          <div className="intentString" key={'intentString'+index}>
            <div className="intentStringTitle rem09">
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

  // 객체 타입 : tripodSkillCustom 분석기
  //  장비와 스킬에 따라 다름
  tripodSkillCustomParser(_arr, type){
    return _arr.map(tripod => {
      const {value} = tripod;
      return Object.values(value);
    })
    .map(el => {
      return el.map((res, index) => {
        if(type === 'equip'){
          const {desc} = res;
          let returnValue = 
            <div className="tripodSkillCustom" key={`tripodSkillCustom${index}`}>
              <div className="GemImg"></div>
              <div className="GemInfo">
                <div className="GemName overflowDot rem09">{desc}</div>
                <div className="GemStat"></div>
              </div>
            </div>
          if(desc !== '보석 장착 필요'){
            const {name, slotData : {iconGrade, iconPath}} = res;
            returnValue = 
              <div className="tripodSkillCustom" key={`tripodSkillCustom${index}`}>
                <div className='GemImg' style={{border : '1px solid #999'}}>
                  <img className={`gradient${iconGrade} imgWidth`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt="보석"/>
                </div>
                <div className="GemInfo">
                  <div className={`GemName rem09 overflowDot color${iconGrade}`}>{this.getOnlyText(name)}</div>
                  <div className="GemStat rem08 overflowDot">{desc}</div>
                </div>
              </div>
          }
          return returnValue;
        }else if(type === 'skill'){
          if(res.name !== ''){
            const {name, desc, tier, slotData : {iconPath}} = res;
            return (
              <div className="skillTripod" key={`skillTripod${index}`}>
                <div className="skillTripodImg">
                  <img className="imgWidth" src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={name} />
                </div>
                <div className="skillTripodContent">
                  <div className="skillTripodNameLv">
                    {this.getOnlyText(tier)} {this.getOnlyText(name)}
                  </div>
                  <div className="skillTripodDesc">
                    {this.getOnlyText(desc)}
                  </div>
                </div>
              </div>
            )
          }
          return null;
        }
        return null;
      })
    })
  },
  
  // 등급에 따른 글씨색상
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

  // 재귀함수
  recursiveFunction(val, fun, name){
    return fun(val, fun, name);
  },

  // 장비나 아바타 마우스 호버시 상세내용 출력
  createEquipListDetail(partImg, detail, pos, type){
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
        <div className={`listDetail hoverContent zIndex10 ${pos} listDetail${type}`}>
          <div className="listDetailTop">
            <div className="listDetailImg">
              <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
              <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
            </div>
            <div className="listDetailMainInfo">
              <div className={`listDetailName overflowDot color${iconGrade} rem11`}>
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

  // 아바타 or 장비 나누기
  divideEquipInfo(equipInfo){
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