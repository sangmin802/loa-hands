import UserInfo from './models/userInfo.js'

export default {
  getUserData(name){
    // "proxy": "https://m-lostark.game.onstove.com",
    // "homepage": "http://sangmin802.github.io/loa-hands",
    // const baseUrl = 'https://cors-anywhere.herokuapp.com/https://m-lostark.game.onstove.com/Profile/Character/';
    const baseUrl = '/Profile/Character/';
    const encoded = encodeURIComponent(name);
    return new Promise((getUserDataRes, getUserDataRej) => {
      fetch(baseUrl+encoded)
      .then(httpRes => httpRes.text())
      .then(data => {
        if(data.includes("alert('캐릭터 정보가 없습니다.")){
          getUserDataRej();
        }else if(data.includes("서비스 점검")){
          alert('서비스 점검중입니다.')
          getUserDataRej();
        }else{
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html')
          const body = doc.getElementsByTagName('body')[0]
  
          const expedition = body.getElementsByClassName('myinfo__character--wrapper2')[0];
          const user = new UserInfo(body, name, expedition);
          getUserDataRes(user);
        }
      })
    })
  }
}