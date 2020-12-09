import React from 'react';
import HeaderContainer from './Root/Container/HeaderContainer.js';
import HomeContainer from './Root/Container/HomeContainer.js';
import UserInfoContainer from './UserInfo/Container/UserInfoContainer.js';
import App from './App.js';
import LoadingSpinner from './@Shared/LoadingSpinner.js';
import {useSelector, shallowEqual} from 'react-redux';

function AppContainer(){
  const {isLoading} = GetState();

  return <App 
            isLoading={isLoading}
            HeaderContainer={HeaderContainer}
            HomeContainer={HomeContainer}
            UserInfoContainer={UserInfoContainer}
            LoadingSpinner={LoadingSpinner}
         />
}

function GetState(){
  return useSelector(state => ({
    isLoading : state.isLoading,
  }), shallowEqual);
}
export default AppContainer;