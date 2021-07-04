import React from "react";
import { Route } from "react-router-dom";
import { SearchLoading, Header, AsyncBoundary } from "components/";
import { Home, UserInfo } from "../../pages/";
import * as Styled from "./index.style";

function App() {
  return (
    <Styled.Container isLoading={false}>
      <Styled.InnerContainer>
        <Styled.HeaderContainer>
          <Header />
        </Styled.HeaderContainer>
        <AsyncBoundary suspenseFallback={<SearchLoading />}>
          <Styled.Main>
            <Route exact path="/" component={Home} />
            <Route path="/userInfo/:name" component={UserInfo} />
          </Styled.Main>
        </AsyncBoundary>
      </Styled.InnerContainer>
    </Styled.Container>
  );
}

export default React.memo(App, () => true);
