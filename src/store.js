import { createStore } from 'redux';

export default createStore((state, action) => {
  if(!state) return {
    isLoading : false,
    userData : null,
  }

  if(state){
    const newState = {...state};
    switch(action.type){
      case 'loadingToggle' : 
        newState.isLoading = action.bool;
      break;
      case 'getUserData' :
        newState.isLoading = action.bool;
        newState.userData = action.data;
      break;
      default : return null;
    }

    return newState;
  }
})