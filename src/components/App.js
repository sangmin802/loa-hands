import React from 'react';
import '../css/App.css';
import '../index.css';
import { Route, Link, useHistory } from 'react-router-dom'
import Connect from '../connect.js'

function App(redux) {
  const history = useHistory();
  const {getUserData, loadingToggle, isLoading} = redux;

  const userOnSubmit = (e) => {
    e.preventDefault();
    const {target : {searchedUser : {value}}} = e;
    loadingToggle(true)
    getUserData(value, history)
  }

  const setLoadingBgStyle = () => {
    return isLoading ? 'loadingBg' : null
  }

  return (
      <div className="App">
        <div className={setLoadingBgStyle()}>
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
          <form onSubmit={userOnSubmit}>
            <input type="text" name="searchedUser"/>
            <input type="submit" value="검색"/>
          </form>
          <Route exact path="/" component={Connect.Home}/>
          <Route path="/userInfo/:name" component={Connect.UserInfo}/>
      </div>
  );
}

export default App;
