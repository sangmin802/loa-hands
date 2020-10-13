import {connect} from 'react-redux';
import API from './API.js'
import App from './components/App.js';
import Header from './components/Header.js'
import Home from './components/Home.js';
import UserInfo from './components/UserInfo.js';


export default {
  App : connect(state => {
    return {
      isLoading : state.isLoading
    }
  })(App),

  Header : connect(state => {
    return {

    }
  }, (dispatch) => {
    return {
      getUserData(name, history){
        dispatch({type : 'loadingToggle', bool : true});
        API.getUserData(name)
        .then((data) => {
          // 데이터를 받는 시간이 있기때문에 동기식으로 다 받고나서, Link to가 아닌, 리덕스 디스패처 내부에서 리다이렉션을 해야했다.
          //  1. BrowserRouter를 index.js 최상단으로 옮겨서 모든 App.js를 포함한 모든 컴포넌트들이 history 속성을 사용할 수 있도록 한다.
          //  2. App.js 컴포넌트에서 디스패쳐로 history 객체를 보내서 리다이렉션 시킴
          dispatch({type : 'getUserData', data, bool : false})
          history.push(`/userInfo/${name}`)
        })
        .catch(() => {
          dispatch({type : 'loadingToggle', bool : false})
          history.push(`/`)
        });
      }
    }
  })(Header),

  Home : connect(state => state,)(Home),

  UserInfo : connect(state => {
    return {
      userData : state.userData
    }
  },(dispatch) => {
    return {
      getUserData(name, history){
        dispatch({type : 'loadingToggle', bool : true});
        API.getUserData(name)
        .then((data) => {
          dispatch({type : 'getUserData', data, bool : false})
          history.push(`/userInfo/${name}`)
        })
        .catch(() => {
          dispatch({type : 'loadingToggle', bool : false})
          history.push(`/`)
        });
      }
    }
  })(UserInfo),
}