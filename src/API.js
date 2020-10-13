import UserInfo from './models/userInfo.js'

export default {
  getUserData(name){
    // "proxy": "https://lostark.game.onstove.com",
    const baseUrl = 'https://cors-anywhere.herokuapp.com/https://lostark.game.onstove.com/Profile/Character/';
    const encoded = encodeURIComponent(name);
    return new Promise((getUserDataRes, getUserDataRej) => {
      fetch(baseUrl+encoded)
      .then(httpRes => httpRes.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html')
        const body = doc.getElementsByTagName('body')[0]
        const isValidUser = body.getElementsByClassName("profile-character-info")[0];
        // const expeditionChar = body.getElementsByClassName("profile-character-list__char")[0].childNodes;
        const expeditionChar = body.getElementsByClassName("profile-character-list__char");
        const expeditionServer = body.getElementsByClassName("profile-character-list__server");
        if(!isValidUser){
          getUserDataRej();
        }else{
          const user = new UserInfo(body, name, [expeditionChar, expeditionServer]);
          getUserDataRes(user);
        }
      })
    })
  }
}