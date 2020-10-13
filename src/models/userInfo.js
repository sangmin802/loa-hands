import EquipInfo from "./equipInfo";
import Factory from '../factory.js'

export default class UserInfo {
  constructor(raw, name, expedition){
    // 유저 기본정보 설정
    this.setUserBaseInfo(raw, name)

    // 유저 아이템정보 설정
    this.setUserEquipInfo(raw)
    
    // 모험단 유저
    this.setExpeditionUserInfo(raw, expedition)
  }

  setUserBaseInfo(raw){
    const userInfo = [...raw.getElementsByClassName('myinfo__contents-level')[0].children];
    const badge = [...raw.getElementsByClassName('myinfo__badge')[0].children];

    this.expeditionLv = userInfo[0].children[0].children[1].innerText;
    this.title = userInfo[0].children[1].children[1].innerText;
    this.curBigLv = userInfo[1].children[0].children[1].childNodes[0].textContent;
    this.curSamllLv = userInfo[1].children[0].children[1].childNodes[1].innerText;
    this.reachBigLv = userInfo[1].children[1].children[1].childNodes[0].textContent;
    this.reachSamllLv = userInfo[1].children[1].children[1].childNodes[1].innerText;
    this.guild = userInfo[2].children[0].children[1].innerText;this.pvp = userInfo[2].children[1].children[1].innerText;
    this.garden = userInfo[3].children[0].children[1].innerText;
    if(this.garden === ' ') this.garden = '컨텐츠 개방 필요'
    this.className = badge[1].children[0].alt;
    this.classSrc = badge[1].children[0].attributes[0].value

    const str = this.classSrc.split('thumb/')[1];
    const end = str.indexOf('_m.png');
    this.classEngName = str.substring(0, end);
  }

  setUserEquipInfo(raw){
    const script = raw.getElementsByTagName('script')
    const script0 = script[0];
    this.equipInfo = new EquipInfo(script0)
  }

  setExpeditionUserInfo(raw, expedition){
    const expeditionUserInfo = [...raw.getElementsByClassName('myinfo__character')[0].children];
    const [lvWithName, , searchUserServer] = expeditionUserInfo;
    this.name = lvWithName.childNodes[1].textContent.trim();
    this.Lv = lvWithName.children[0].innerText;
    this.server = searchUserServer.children[0].children[1].innerText;
    
    const serverWrap = Factory.recursiveFunction(expedition, this.getWantedTag, "STRONG")
    .filter(el => el.nodeName==="STRONG")
    .map(str => str.innerText);
    this.expeditionUserWrap = Factory.recursiveFunction(expedition, this.getWantedTag, "UL")
    .filter(el => el.nodeName==="UL")
    .map((ul, index) => {
      return {
        server : serverWrap[index],
        charList : [...ul.children].map(li => {
          return {
            name : li.children[0].childNodes[1].textContent.trim(),
            lv : li.children[0].children[0].innerText
          }
        })
      }
    })
  }

  getWantedTag(el, fun, name){
    if(el.nodeName!==name){
      const child = el.childNodes;
      return [...child].map(res => {
        return fun(res, fun, name)
      })
    }else{
      return el;
    }
  }
}