import React from 'react';
import '../css/App.css';
import Header from './Header.js';
import Home from './Home.js';
import UserInfo from './UserInfo.js';
import { Route } from 'react-router-dom'
import {useSelector} from 'react-redux';

function App(){
  const 
    state = useSelector(state => ({
      isLoading : state.isLoading,
    })),
    {isLoading} = state;

  let 
    isLoadingStyle1 = null,
    isLoadingStyle2 = 'displayNone';
  
  if(isLoading){
    isLoadingStyle1 = 'height100vh'
    isLoadingStyle2 = 'loadingBg zIndex99'
  }
  
  return (
    <div className={`App ${isLoadingStyle1}`}>
      <div className={isLoadingStyle2}>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
      <Header />
      <div className="AppWrap">
        <Route exact path="/" component={Home}/>
        <Route path="/userInfo/:name" component={UserInfo}/>
      </div>
    </div>
  );
}



export default App;
