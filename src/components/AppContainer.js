import React from 'react';
import HeaderContainer from './Root/Container/HeaderContainer.js';
import HomeContainer from './Root/Container/HomeContainer.js';
import UserInfo from './UserInfo.js';
import App from './App.js';
import LoadingSpinner from './@Shared/LoadingSpinner.js';
import {useSelector, shallowEqual} from 'react-redux';

function AppContainer(){
  const {isLoading} = GetState();

  return <App 
            isLoading={isLoading}
            HeaderContainer={HeaderContainer}
            HomeContainer={HomeContainer}
            UserInfo={UserInfo}
            LoadingSpinner={LoadingSpinner}
         />
}

function GetState(){
  return useSelector(state => ({
    isLoading : state.isLoading,
  }), shallowEqual);
}
export default AppContainer;