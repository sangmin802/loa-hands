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

  Home : connect(state => state,)(Home),

  UserInfo : connect(state => {
    return {
      userData : state.userData,
      expeditionPop : state.expeditionPop,
      equipTab : state.equipTab
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
      changeEquipTab(num){
        dispatch({type : 'changeEquipTab', tab : num})
      }
    }
  })(UserInfo),
}