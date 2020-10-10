import React from 'react';
import '../css/App.css';
import '../index.css';
import { Route } from 'react-router-dom'
import Connect from '../connect.js'

function App(redux) {
  const {isLoading} = redux;

  const setLoadingBgStyle = () => {
    return isLoading ? 'loadingBg' : 'displayNone'
  }
  return (
      <div className="App">
        <div className={setLoadingBgStyle()}>
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        <div className="AppWrap">
          <Connect.Header />
          <Route exact path="/" component={Connect.Home}/>
          <Route path="/userInfo/:name" component={Connect.UserInfo}/>
        </div>
      </div>
  );
}

export default App;
