import React from "react";
import "style/App.css";
import { Route } from "react-router-dom";
import { useLoadingToggle } from "hooks/useLoadingToggle";
import { useHome } from "hooks/useHome";
import { useUser } from "hooks/useUser";
import Header from "components/_header/index";
import Home from "pages/Home";
import UserInfo from "pages/UserInfo";
import LoadingSpinner from "components/_loading-spinner/index";
import Dialog from "components/_dialog/index";

function App() {
  const { isLoading } = useLoadingToggle();
  const { setHomeData } = useHome();
  const { setUserData } = useUser();

  return (
    <div className={`App ${isLoading ? "height100vh" : ""}`}>
      <LoadingSpinner
        style={isLoading ? "loadingBg zIndex99" : "displayNone"}
      />
      <Dialog />
      <div className="innerApp">
        <Header setHomeData={setHomeData} setUserData={setUserData} />
        <div className="AppWrap">
          <Route exact path="/" component={Home} />
          <Route path="/userInfo/:name" component={UserInfo} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(App, () => true);
