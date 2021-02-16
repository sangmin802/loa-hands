import React from 'react';
import '../css/App.css';
import { Route } from 'react-router-dom'
import { Selector } from 'store/controller/selector'

// 컴포넌트
import Header from 'components/header/index';
import Home from 'pages/Home';
import UserInfoContainer from '../components/UserInfo/Container/UserInfoContainer';
import LoadingSpinner from '../components/@Shared/LoadingSpinner';

function App(){
  const {isLoading} = Selector(['isLoading']);
  const isLoadingStyle1 = isLoading ? 'height100vh' : null;
  const isLoadingStyle2 = isLoading ? 'loadingBg zIndex99' : 'displayNone';
  
  return (
    <div className={`App ${isLoadingStyle1}`}>
      <LoadingSpinner isLoadingStyle={isLoadingStyle2}/>
      <div className="innerApp">
        <Header />
        <div className="AppWrap">
          <Route exact path="/" component={Home}/>
          <Route path="/userInfo/:name" component={UserInfoContainer}/>
        </div>
      </div>
    </div>
  );
}

export default React.memo(App, () => true);