import React from "react";
import { Route } from "react-router-dom";
import Home from "pages/home";
import UserInfo from "pages/user-info";
import * as Styled from "./index.style";

function App() {
  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Main>
        <Route exact path="/" component={Home} />
        <Route path="/userInfo/:name" component={UserInfo} />
      </Styled.Main>
    </Styled.Container>
  );
}

export default App;
