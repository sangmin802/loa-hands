import React, { useRef, useCallback } from "react";
import { Route } from "react-router-dom";
import { useLoadingToggle } from "hooks/use-loadingtoggle";
import { useHome } from "hooks/use-home";
import { useUser } from "hooks/use-user";
import { LoadingSpinner, Input, Text, Button } from "components/";
import { Home, UserInfo } from "../../pages/";
import * as Styled from "./index.style";

function App() {
  const { isLoading } = useLoadingToggle();
  const { setHomeData } = useHome();
  const { setUserData } = useUser();
  const textInput = useRef(null);
  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      setUserData(textInput.current.value);
      textInput.current.value = null;
    },
    [textInput, setUserData]
  );

  return (
    <Styled.Container isLoading={isLoading}>
      {isLoading && <LoadingSpinner role="loading-spinner" />}
      <Styled.InnerContainer>
        <Styled.HeaderContainer>
          <Styled.InnerHeader>
            <Styled.Background role="go-home" onClick={setHomeData} />
            <Styled.Form role="form" onSubmit={onSubmitHandler}>
              <Styled.InputText>
                <Input
                  type="text"
                  name="searchedUser"
                  ref={textInput}
                  autoComplete="off"
                />
              </Styled.InputText>
              <Styled.InputSubmit>
                <Button>
                  <Text>검색</Text>
                </Button>
              </Styled.InputSubmit>
            </Styled.Form>
          </Styled.InnerHeader>
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
