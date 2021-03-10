import React from "react";
import "../css/App.css";
import { Route } from "react-router-dom";
import LoadingToggleHooks from "hooks/loadingToggleHooks";

// 컴포넌트
import Header from "components/home-header/index";
import Home from "pages/Home";
import UserInfo from "pages/UserInfo";
import LoadingSpinner from "components/_loading-spinner/index";

function App() {
  const { isLoading } = LoadingToggleHooks();
  const isLoadingStyle1 = isLoading ? "height100vh" : null;
  const isLoadingStyle2 = isLoading ? "loadingBg zIndex99" : "displayNone";
  return (
    <div className={`App ${isLoadingStyle1}`}>
      <LoadingSpinner isLoadingStyle={isLoadingStyle2} />
      <div className="innerApp">
        <Header />
        <div className="AppWrap">
          <Route exact path="/" component={Home} />
          <Route path="/userInfo/:name" component={UserInfo} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(App, () => true);
