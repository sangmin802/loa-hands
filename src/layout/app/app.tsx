import React from "react";
import Routes from "router";

import ModalManager from "components/modal/modalManager";
import Modal from "components/modal/modal";
import * as Styled from "./app.style";

function App() {
  return (
    <ModalManager>
      <Styled.Container>
        <Styled.Header />
        <Styled.Main>
          <Routes />
        </Styled.Main>
      </Styled.Container>
      <Modal />
    </ModalManager>
  );
}

export default App;
