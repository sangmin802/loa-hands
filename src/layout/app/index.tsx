import React from "react";
import { Route } from "react-router-dom";
import { Header } from "components/";
import { Home, UserInfo } from "../../pages/";
import * as Styled from "./index.style";

function App() {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Header />
      </Styled.HeaderContainer>
      <Styled.Main>
        <Route exact path="/" component={Home} />
        <Route path="/userInfo/:name" component={UserInfo} />
      </Styled.Main>
    </Styled.Container>
  );
}

export default App;
