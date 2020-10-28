const initialStates = {
  isLoading : false,
  userData : null,
  homeData : null,
  expeditionPop : false,
  userInfoMainTab : 0,
  userInfoSubTab : 0
}

export default (state = initialStates, action) => {
  const {type} = action;
  switch(type){
    case 'SET_HOME_DATA' : {
      return {
        ...state,
        homeData : action.homeData,
        isLoading : action.loadingPop,
      }
    }
    case 'LOADING_TOGGLE' : {
      return {
        ...state,
        isLoading : action.loadingPop,
      }
    }
    case 'GET_USER_DATA' : {
      return {
        ...state,
        isLoading : action.loadingPop,
        expeditionPop : false,
        userData : action.data,
        userInfoMainTab : 0,
        userInfoSubTab : 0,
      }
    }
    case 'EXPEDITION_POP_TOGGLE' : {
      return {
        ...state,
        expeditionPop : action.expeditionPop,
      }
    }
    case 'change_user_info/MAIN_TAB' : {
      return {
        ...state,
        userInfoMainTab : action.userInfoMainTab,
        userInfoSubTab : 0,
      }
    }
    case 'change_user_info/SUB_TAB' : {
      return {
        ...state,
        userInfoSubTab : action.userInfoSubTab,
      }
    }
    default : return state;
  }
}