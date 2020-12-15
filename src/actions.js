import API from './API.js';

// Action types
export const 
  RESET = 'RESET',
  LOADING_TOGGLE = 'LOADING_TOGGLE',
  GET_USER_DATA = 'GET_USER_DATA',
  SET_HOME_DATA = 'SET_HOME_DATA',
  EXPEDITION_POP_TOGGLE = 'EXPEDITION_POP_TOGGLE',
  MAIN_TAB = 'change_user_info/MAIN_TAB',
  SUB_TAB = 'change_user_info/SUB_TAB';

// Action creators
export const loadingToggle = (loadingPop) => {
  return {
    type : LOADING_TOGGLE,
    loadingPop
  }
}
export const getUserData = (data, loadingPop) => {
  return {
    type : GET_USER_DATA,
    data,
    loadingPop
  }
}
export const setHomeData = (homeData, loadingPop) => {
  return {
    type : SET_HOME_DATA,
    homeData,
    loadingPop
  }
}
export const expeditionPopToggle = (expeditionPop) => {
  return {
    type : EXPEDITION_POP_TOGGLE,
    expeditionPop
  }
}
export const changeUserInfoMainTab = (userInfoMainTab) => {
  return {
    type : MAIN_TAB,
    userInfoMainTab
  }
}
export const changeUserInfoSubTab = (userInfoSubTab) => {
  return {
    type : SUB_TAB,
    userInfoSubTab
  }
}

// Thunk Action creators
export const getUserData_Thunk = (name, history) => async (dispatch, getState) => {
  if(name.replace(/ /g,'')){
    dispatch(loadingToggle(true));
    // async await 버전
    try {
      const data = await API.getUserData(name.replace(/ /g,''));
      dispatch(getUserData(data, false))
      history.replace(`/userInfo/${name}`)
    } catch(err) {
      alert(err.message);
      dispatch(loadingToggle(false));
      history.replace(`/`)
    }

    // Promise 버전
    // API.getUserData(name.replace(/ /g,''))
    // .then((data) => {
    //   dispatch(getUserData(data, false))
    //   history.replace(`/userInfo/${name}`)
    // })
    // .catch(() => {
    //   dispatch(loadingToggle(false));
    //   history.replace(`/`)
    // });
  }
}

export const setHomeData_Thunk = (history) => (dispatch, getState) => {
  dispatch(loadingToggle(true));
  API.getHomeData()
  .then(homeData => {
    dispatch(setHomeData(homeData, false))
    if(history) history.replace(`/`);
  })
}