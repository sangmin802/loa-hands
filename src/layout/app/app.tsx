import React from "react";
import { Route } from "react-router-dom";
import Home from "pages/home/home";
import FetchUserInfo from "pages/userInfo/fetchUserInfo/fetchUserInfo";
import ModalManager from "components/modal/modalManager";
import Modal from "components/modal/modal";
import * as Styled from "./app.style";

function App() {
  return (
    <ModalManager>
      <Styled.Container>
        <Styled.Header />
        <Styled.Main>
          <Route exact path="/" component={Home} />
          <Route path="/userInfo/:name" component={FetchUserInfo} />
        </Styled.Main>
      </Styled.Container>
      <Modal />
    </ModalManager>
  );
}

export default App;
