import React from 'react';

export default {
  getOnlyText(string){
    const newStr = string.replace(/<BR>/gi, "enter");
    const parsed = new DOMParser().parseFromString(newStr, "text/html").body.textContent;
    if(parsed.includes('enter')){
      const split = parsed.split('enter');
      return split.map((res, index) => {
        return <div key={'enter'+index}>{res}</div>
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
  }
}