import EquipInfo from "./equipInfo";

export default class UserInfo {
  constructor(raw, name){
    // 유저 기본정보 설정
    this.setUserBaseInfo(raw, name)

    // 유저 아이템정보 설정
    this.setUserEquipInfo(raw)
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
}