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

  tripodSkillCustomParser(_arr){
    return _arr.map(tripod => {
      const {value} = tripod;
      return Object.values(value);
    })
    .map(el => {
      return el.map((res, index) => {
        return (
          <AccGem data={res} key={'accGem'+index}/>
        )
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

  recursiveFunction(val, fun){
    return fun(val, fun);
  }
}