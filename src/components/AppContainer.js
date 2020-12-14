import React from 'react';
import App from './App.js';
import {useSelector, shallowEqual} from 'react-redux';

function AppContainer(){
  const {isLoading} = GetState();

  return <App 
            isLoading={isLoading}
         />
}

function GetState(){
  return useSelector(state => ({
    isLoading : state.isLoading,
  }), shallowEqual);
}
export default AppContainer;