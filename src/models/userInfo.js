import EquipInfo from "./equipInfo";
import Factory from '../factory.js'

export default class UserInfo {
  constructor(raw, name, expedition){
    // 유저 기본정보 설정
    this.setUserBaseInfo(raw, name)

    // 유저 아이템정보 설정
    this.setUserEquipInfo(raw)
    
    // 모험단 유저
    this.setExpeditionUserInfo(expedition)
  }

  setUserBaseInfo(raw, name){
    const classInfo = raw.getElementsByClassName("profile-character-info__img")[0];

    this.userName = name;
    this.expeditionLv = raw.getElementsByClassName("level-info__expedition")[0].innerText
    this.Lv = raw.getElementsByClassName("level-info__item")[0].innerText
    this.itemLv = raw.getElementsByClassName("level-info2__expedition")[0].innerText
    this.reachItemLv = raw.getElementsByClassName("level-info2__item")[0].innerText
    this.className = classInfo.attributes.alt.value
    this.classLogoImg = classInfo.attributes.src.value
    this.classImg = raw.getElementsByClassName("profile-equipment__character")[0].childNodes[0].attributes.src.value
  }

  setUserEquipInfo(raw){
    const script = raw.getElementsByTagName('script')
    const script0 = script[0];
    this.equipInfo = new EquipInfo(script0)
  }

  setExpeditionUserInfo(expedition){
    const [expeditionChar, expeditionServer] = expedition
    this.expeditionUserWrap = Array.from(expeditionChar).map((ex, index) => {
      return {
        server : expeditionServer[index].innerText,
        charList : ex
      }
    })
    .map(wrap => {
      const { charList, server } = wrap;
      const children = charList.children;
      const onlyLi = [];
      [...children].forEach(child => {
        if(child.nodeName==="LI"){
          onlyLi.push(child); 
        }
      })
      const charInfo = onlyLi.map(li => {
        return Factory.recursiveFunction(li ,this.getButtonTag)
      })
      .map(arr => {
        return arr[1]
      })
      .map(arr2 => {
        return arr2[1]
      })
      .map(btn => {
        const [,img,lvWrap,nameWrap,] = [...btn.childNodes];
        const Lv = lvWrap.textContent;
        const name = nameWrap.textContent;
        const classImg = img.attributes.src.value;
        const className = img.attributes.alt.value;
        return { name, classImg, Lv, className };
      })
      return {server, charList : charInfo}
    })
  }

  getButtonTag(el, fun){
    if(el.nodeName!=='BUTTON'){
      const child = el.childNodes;
      return [...child].map(res => {
        return fun(res, fun)
      })
    }else{
      return el;
    }
  }
}


// const onlyLi = [];
// [...expeditionChar].forEach(child => {
//     onlyLi.push(child);
// })

// onlyLi.map(li => {
//   onlyButton.push(Factory.recursiveFunction(child ,this.getButtonTag, true))
// })
// console.log(onlyButton)