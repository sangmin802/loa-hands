import React from "react";
import "style/app.scss";
import { Route } from "react-router-dom";
import { useLoadingToggle } from "hooks/use-loadingtoggle";
import { useHome } from "hooks/use-home";
import { useUser } from "hooks/use-user";
import { Header, LoadingSpinner } from "components/";
import Home from "pages/home";
import UserInfo from "pages/user-info";

function App() {
  const { isLoading } = useLoadingToggle();
  const { setHomeData } = useHome();
  const { setUserData } = useUser();

  return (
    <div className={`app ${isLoading ? "height100vh" : ""}`}>
      {isLoading && <LoadingSpinner />}
      <div className="inner-app">
        <Header setHomeData={setHomeData} setUserData={setUserData} />
        <div className="app-wrap">
          <Route exact path="/" component={Home} />
          <Route path="/userInfo/:name" component={UserInfo} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(App, () => true);
