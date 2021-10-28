import React from "react";
import { Route } from "react-router-dom";
import Home from "pages/home/home";
import FetchUserInfo from "pages/userInfo/fetchUserInfo/index";
import * as Styled from "./index.style";

function App() {
  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.Main>
        <Route exact path="/" component={Home} />
        <Route path="/userInfo/:name" component={FetchUserInfo} />
      </Styled.Main>
    </Styled.Container>
  );
}

export default App;
