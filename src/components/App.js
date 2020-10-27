import React from 'react';
import '../css/App.css';
// import Connect from '../connect.js'
import Header from './Header.js';
import Home from './Home.js';
import UserInfo from './UserInfo.js';
import { Route } from 'react-router-dom'
import {useSelector} from 'react-redux';

// const AppContent = React.memo(function(){
//   return (
//     <div className="AppWrap">
//       <Route exact path="/" component={Home}/>
//       <Route path="/userInfo/:name" component={UserInfo}/>
//     </div>
//   )
// }, () => true)

function App() {
  const 
    {isLoading} = useSelector(state => ({
      isLoading : state.isLoading,
    }));
  
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
      {/* <AppContent /> */}
      <div className="AppWrap">
        <Route exact path="/" component={Home}/>
        <Route path="/userInfo/:name" component={UserInfo}/>
      </div>
    </div>
  );
}



export default React.memo(App, () => true);
