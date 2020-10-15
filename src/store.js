import { createStore } from 'redux';

export default createStore((state, action) => {
  if(!state) return {
    isLoading : false,
    userData : null,
    expeditionPopBool : false,
    equipTab : 0
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
        newState.equipTab = 0
      break;
      case 'expeditionPopToggle' :
        newState.expeditionPop = action.expeditionPop;
      break;
      case 'changeEquipTab' :
        newState.equipTab = action.tab;
      break;
      default : return null;
    }

    return newState;
  }
})