import React from 'react';
import '../css/App.css';
import { Route } from 'react-router-dom'
import Connect from '../connect.js'

function App(redux) {
  const {isLoading} = redux;
  let isLoadingStyle1 = null;
  let isLoadingStyle2 = 'displayNone';

  if(isLoading){
    isLoadingStyle1 = 'height100vh'
    isLoadingStyle2 = 'loadingBg zIndex99'
  }
  return (
      <div className={`App ${isLoadingStyle1}`}>
        <div className={isLoadingStyle2}>
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        <Connect.Header />
        <div className="AppWrap">
          <Route exact path="/" component={Connect.Home}/>
          <Route path="/userInfo/:name" component={Connect.UserInfo}/>
        </div>
      </div>
  );
}

export default App;
