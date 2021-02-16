import React from 'react';
import App from './App';
import {useSelector, shallowEqual} from 'react-redux';
import {RootState} from '../store/model/store'

function AppContainer(){
  const {isLoading} = GetState();

  return <App isLoading={isLoading}/>
}

function GetState(){
  return useSelector((state : RootState) => ({
    isLoading : state.isLoading,
  }), shallowEqual);
}
export default AppContainer;