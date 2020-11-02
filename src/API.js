import UserInfo from './models/userInfo.js';
import HomeData from './models/homeData.js';
import Factory from './factory.js';
import {PROXY} from './porxy.js';

export default {
  getUserData(name){
    // "proxy": "https://m-lostark.game.onstove.com",
    // "homepage": "http://sangmin802.github.io/loa-hands",

    const
      // baseUrl = '/Profile/',
      baseUrl = `${PROXY}https://m-lostark.game.onstove.com/Profile/`,
      encoded = encodeURIComponent(name);

    return new Promise((getUserDataRes, getUserDataRej) => {
      fetch(baseUrl+'Character/'+encoded)
      .then(httpRes => httpRes.text())
      .then(data => {
        if(data.includes("alert('캐릭터 정보가 없습니다.")){
          getUserDataRej();
        }else if(data.includes("서비스 점검")){
          alert('서비스 점검중입니다.')
          getUserDataRej();
        }else{
          const 
            promiseAllArr = ['GetCollection'],
            body = Factory.returnBody(data),
            script = body.getElementsByTagName('script'),
            expedition = body.getElementsByClassName('myinfo__character--wrapper2')[0],
            [,memberNo,,pcId,,worldNo] = script[10].textContent.split('\'');

          Promise.all(
            promiseAllArr.map((arr) => {
              let 
                promiseParams = {
                  memberNo, pcId, worldNo
                };
              return fetch(baseUrl+arr+'?'+new URLSearchParams(promiseParams).toString()).then(res => res.text())
            })
          )
          .then(_PA => {
            const user = new UserInfo(body, name, expedition, _PA);

            getUserDataRes(user);
          })
        }
      })
    })
  },

  async getHomeData(){
    const
      // baseUrl = '/News/Event/Now';
      urlList = ['http://m.inven.co.kr/lostark/timer/','https://m-lostark.game.onstove.com/News/Event/Now'];
    
    return new Promise(res => {
      Promise.all(
        urlList.map(url => {
          return fetch(PROXY+url)
          .then(urlRes => urlRes.text())
        })
      )
      .then(bodys => {
        res(new HomeData(bodys))
      })
    })
  }
}