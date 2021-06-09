import React from "react";
import { Route } from "react-router-dom";
import { useLoadingToggle } from "hooks/use-loadingtoggle";
import { useHome } from "hooks/use-home";
import { useUser } from "hooks/use-user";
import { Header, LoadingSpinner } from "components/";
import { Home, UserInfo } from "../../pages/";
import * as Styled from "./index.style";

function App() {
  const { isLoading } = useLoadingToggle();
  const { setHomeData } = useHome();
  const { setUserData } = useUser();

  return (
    <Styled.Container isLoading={isLoading}>
      {isLoading && <LoadingSpinner />}
      <Styled.InnerContainer>
        <Styled.HeaderContainer>
          <Header setHomeData={setHomeData} setUserData={setUserData} />
        </Styled.HeaderContainer>
        <Styled.Main>
          <Route exact path="/" component={Home} />
          <Route path="/userInfo/:name" component={UserInfo} />
        </Styled.Main>
      </Styled.InnerContainer>
    </Styled.Container>
  );
}

export default React.memo(App, () => true);
