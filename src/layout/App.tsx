import React from "react";
import "style/app.scss";
import { Route } from "react-router-dom";
import { useLoadingToggle } from "hooks/use-loadingtoggle";
import { useHome } from "hooks/use-home";
import { useUser } from "hooks/use-user";
import Header from "components/header/index";
import Home from "pages/home";
import UserInfo from "pages/user-info";
import LoadingSpinner from "components/loading-spinner/index";
import Dialog from "components/dialog/index";

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
