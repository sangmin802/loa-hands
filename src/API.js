import UserInfo from './models/userInfo.js'

export default {
  getUserData(name){
    // "proxy": "https://m-lostark.game.onstove.com",
    // "homepage": "http://sangmin802.github.io/loa-hands",

    const
      baseUrl = '/Profile/',
      // baseUrl = 'https://cors-anywhere.herokuapp.com/https://m-lostark.game.onstove.com/Profile/',
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
            parser = new DOMParser(),
            doc = parser.parseFromString(data, 'text/html'),
            body = doc.getElementsByTagName('body')[0],
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
  }
}