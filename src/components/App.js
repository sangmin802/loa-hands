import React from 'react';
import '../css/App.css';
import { Route } from 'react-router-dom'

function App({isLoading, HeaderContainer, HomeContainer, UserInfoContainer, LoadingSpinner}){

  let isLoadingStyle1 = null;
  let isLoadingStyle2 = 'displayNone';
  
  if(isLoading){
    isLoadingStyle1 = 'height100vh'
    isLoadingStyle2 = 'loadingBg zIndex99'
  }
  return (
    <div className={`App ${isLoadingStyle1}`}>
      <LoadingSpinner isLoadingStyle={isLoadingStyle2}/>
      <div className="innerApp">
        <HeaderContainer />
        <div className="AppWrap">
          <Route exact path="/" component={HomeContainer}/>
          <Route path="/userInfo/:name" component={UserInfoContainer}/>
        </div>
      </div>
    </div>
  );
}



export default App;
