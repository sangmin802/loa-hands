import React, { cloneElement } from "react";
import { Route } from "react-router-dom";
import {
  SearchLoading,
  Header,
  AsyncBoundary,
  ErrorFallback,
} from "components/";
import { Home, UserInfo } from "../../pages/";
import * as Styled from "./index.style";

function App() {
  return (
    <Styled.Container>
      <AsyncBoundary
        suspenseFallback={<SearchLoading />}
        errorFallback={<HeaderLayout children={<ErrorFallback />} />}
      >
        <HeaderLayout>
          <Styled.Main>
            <Route exact path="/" component={Home} />
            <Route path="/userInfo/:name" component={UserInfo} />
          </Styled.Main>
        </HeaderLayout>
      </AsyncBoundary>
    </Styled.Container>
  );
}

export function HeaderLayout({ children, ...props }) {
  return (
    <Styled.InnerContainer>
      <Styled.HeaderContainer>
        <Header {...props} />
      </Styled.HeaderContainer>
      {cloneElement(children, { ...props })}
    </Styled.InnerContainer>
  );
}

export default React.memo(App, () => true);
