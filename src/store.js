import { createStore } from 'redux';

export default createStore((state, action) => {
  if(!state) return {
    isLoading : false,
    userData : null,
    expeditionPopBool : false,
    userInfoMainTab : 0,
    userInfoSubTab : 0
  }

  if(state){
    const newState = {...state};
    switch(action.type){
      case 'loadingToggle' : 
        newState.isLoading = action.loadingPop;
      break;
      case 'getUserData' :
        newState.isLoading = action.loadingPop;
        newState.expeditionPop = false;
        newState.userData = action.data;
        newState.userInfoMainTab = 0;
        newState.userInfoSubTab = 0;
      break;
      case 'expeditionPopToggle' :
        newState.expeditionPop = action.expeditionPop;
      break;
      case 'changeUserInfoMainTab' :
        newState.userInfoMainTab = action.userInfoMainTab;
        newState.userInfoSubTab = 0;
      break;
      case 'changeUserInfoSubTab' :
        newState.userInfoSubTab = action.userInfoSubTab;
      break;
      default : return null;
    }

    return newState;
  }
})