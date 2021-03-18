import React from "react";
import "style/App.css";
import { Route } from "react-router-dom";
import LoadingToggleHooks from "hooks/loadingToggleHooks";

// 컴포넌트
import Header from "components/_header/index";
import Home from "pages/Home";
import UserInfo from "pages/UserInfo";
import LoadingSpinner from "components/_loading-spinner/index";
import Dialog from "components/_dialog/index";

function App() {
  const { isLoading } = LoadingToggleHooks();

  return (
    <div className={`App ${isLoading ? "height100vh" : ""}`}>
      <LoadingSpinner
        style={isLoading ? "loadingBg zIndex99" : "displayNone"}
      />
      <Dialog />
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
