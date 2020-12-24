import React from 'react';
import '../css/App.css';
import { Route } from 'react-router-dom'

// 컴포넌트
import HeaderContainer from './Root/Container/HeaderContainer.js';
import HomeContainer from './Root/Container/HomeContainer.js';
import UserInfoContainer from './UserInfo/Container/UserInfoContainer.js';
import LoadingSpinner from './@Shared/LoadingSpinner.js';

function App({isLoading}){
  const isLoadingStyle1 = isLoading ? 'height100vh' : null;
  const isLoadingStyle2 = isLoading ? 'loadingBg zIndex99' : 'displayNone';
  
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



export default React.memo(App, (prev, next) => {
  if(prev.isLoading !== next.isLoading) return false;
  return true;
});
