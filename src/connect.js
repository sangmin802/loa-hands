import {connect} from 'react-redux';
import API from './API.js'
import App from './components/App.js';
import Header from './components/Header.js'
import Home from './components/Home.js';
import UserInfo from './components/UserInfo.js';
import BottomContent from './components/BottomContent.js';


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
        if(name.replace(/ /g,'')){
          dispatch({type : 'loadingToggle', loadingPop : true, expeditionPop : false});
          API.getUserData(name.replace(/ /g,''))
          .then((data) => {
            dispatch({type : 'getUserData', data, loadingPop : false})
            history.push(`/userInfo/${name}`)
          })
          .catch(() => {
            dispatch({type : 'loadingToggle', loadingPop : false})
            history.push(`/`)
          });
        }
      }
    }
  })(Header),

  Home : connect(state => {
    return {
      homeData : state.homeData
    }
  },(dispatch) => {
    return {
      setHomeData(){
        dispatch({type : 'loadingToggle', loadingPop : true});
        API.getHomeData()
        .then(homeData => {
          dispatch({type : 'setHomeData', homeData, loadingPop : false})
        })
      }
    }
  })(Home),

  UserInfo : connect(state => {
    return {
      userData : state.userData,
      expeditionPop : state.expeditionPop,
      userInfoMainTab : state.userInfoMainTab
    }
  },(dispatch) => {
    return {
      getUserData(name, history){
        dispatch({type : 'loadingToggle', loadingPop : true});
        API.getUserData(name)
        .then((data) => {
          dispatch({type : 'getUserData', data, loadingPop : false})
          history.push(`/userInfo/${name}`)
        })
        .catch(() => {
          dispatch({type : 'loadingToggle', loadingPop : false})
          history.push(`/`)
        });
      },
      expeditionPopToggle(bool){
        dispatch({type : 'expeditionPopToggle', expeditionPop : bool})
      },
      changeUserInfoMainTab(num){
        dispatch({type : 'changeUserInfoMainTab', userInfoMainTab : num})
      }
    }
  })(UserInfo),

  BottomContent : connect(state => {
    return {
      userData : state.userData,
      userInfoSubTab : state.userInfoSubTab,
      userInfoMainTab : state.userInfoMainTab
    }
  }, (dispatch) => {
    return {
      changeUserInfoSubTab(num){
        dispatch({type : 'changeUserInfoSubTab', userInfoSubTab : num})
      }
    }
  })(BottomContent),
}