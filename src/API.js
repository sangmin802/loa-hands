import UserInfo from './models/userInfo.js'

export default {
  getUserData(name){
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

        if(!isValidUser){
          getUserDataRej();
        }else{
          const user = new UserInfo(body, name);
          getUserDataRes(user);
        }
      })
    })
  }
}