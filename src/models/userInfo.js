import AbilityInfo from "./abilityInfo";

export default class UserInfo {
  constructor(raw, name, expedition, _PA){
    // 유저 기본정보 설정
    this.setUserBaseInfo(raw, name)

    // 유저 능력치 설정
    this.setUserAbilityInfo(raw)
    
    // 모험단 유저
    this.setExpeditionUserInfo(raw, expedition)

    // 수집형 포인트
    const [collection] = _PA;
    this.setCollectionInfo(collection)
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

  setUserAbilityInfo(raw){
    const script = raw.getElementsByTagName('script')
    const script0 = script[0];
    this.abilityInfo = new AbilityInfo(script0, raw)
  }

  setExpeditionUserInfo(raw, expedition){
    const expeditionUserInfo = [...raw.getElementsByClassName('myinfo__character')[0].children];
    const [lvWithName, , searchUserServer] = expeditionUserInfo;
    this.name = lvWithName.childNodes[1].textContent.trim();
    this.Lv = lvWithName.children[0].innerText;
    this.server = searchUserServer.children[0].children[1].innerText;

    const serverWrap = this.getWantedTag(expedition, this.getWantedTag, "STRONG")
    .filter(el => el.nodeName==="STRONG")
    .map(str => str.innerText);

    this.expeditionUserWrap = this.getWantedTag(expedition, this.getWantedTag, "UL")
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

  setCollectionInfo(co){
    const
      parser = new DOMParser(),
      doc = parser.parseFromString(co, 'text/html');

    this.collectionMini = [...doc.getElementsByClassName('lui-tab__menu')[0].children].map(el => {
      const child = el.childNodes;
      return{
        name : child[0].textContent.trim(),
        size : child[1].innerText
      }
    });
    this.collectionDetail = [...doc.getElementsByClassName('collection-list')]
    .map((colPart, index) => {
      const 
        child = colPart.children,
        title = child[0].children[0].textContent,
        getCount = child[0].children[1].children[0].textContent,
        totalCount = child[0].children[1].children[1].textContent;
      return {
        title, getCount, totalCount,
        detail : [...child[1].children]
        .map(li => {
          let 
            childNodes = li.childNodes,
            no = childNodes[0].textContent,
            name = childNodes[1].textContent.trim(),
            isGet = childNodes[2]?.textContent === '획득';

          if(index === 4){
            const
              get = childNodes[3].children[0].textContent,
              total = childNodes[3].children[1].textContent,
              area = childNodes[2].textContent.trim();
            no = childNodes[1].textContent
            
            isGet = get === total ? true : false;
            name = `${area} ${get} / ${total}`;
          }
          return {
            no, name, isGet
          }
        })
      }
    })
  }

  getWantedTag(el, fun, name){
    const child = [...el.children];
    for(let i = 0; i < child.length; i++){
      if(child[i].nodeName !== name) child[i] = fun(child[i], fun, name);
    }
    return child;
  }
}