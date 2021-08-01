import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  BasicInfo,
  Expedition,
  Navigation,
  Collection,
  VisibleContainer,
  Dialog,
  Button,
  Text,
  MapContainer,
  ConditionalContainer,
  AbilityContainer,
  SkillContainer,
  CollectionContainer,
} from "components/";
import { useUser } from "hooks/use-user";
import { useParams, useHistory } from "react-router-dom";
import * as Styled from "./index.style";

const UserInfo = () => {
  const history = useHistory();
  const { name } = useParams<{ name }>();
  const userData = useUser(name);
  const [subNav, setSubNav] = useState(0);
  const [mainNav, setMainNav] = useState(0);
  const [dialog, setDialog] = useState(null);

  const collectionNav = useMemo(() => {
    const collection = userData.collectionInfo.collectionMini;
    return Collection({ collection });
  }, [userData]);

  const subNavs = useMemo(
    () => [
      ["착용 아이템", "착용 아바타", "특성·각인"],
      ["전투스킬", "생활스킬"],
      collectionNav,
    ],
    [collectionNav]
  );

  const mainNavs = useMemo(() => ["능력치", "스킬", "수집형포인트"], []);

  const handleMainNavigation = useCallback(
    index => {
      setMainNav(index);
      setSubNav(0);
    },
    [setMainNav, setSubNav]
  );

  const handleResetState = useCallback(() => {
    setMainNav(0);
    setSubNav(0);
    setDialog(null);
  }, [setMainNav, setSubNav, setDialog]);

  const handleSearchUser = useCallback(
    name => {
      history.push(`/userInfo/${name}`);
      handleResetState();
    },
    [history, handleResetState]
  );

  const expeditionDialog = useMemo(
    () => (
      <Expedition
        userData={userData}
        setUserData={handleSearchUser}
        setDialog={setDialog}
      />
    ),
    [userData, handleSearchUser, setDialog]
  );

  const setExpeditionDialog = useCallback(() => {
    setDialog(expeditionDialog);
  }, [setDialog, expeditionDialog]);

  useEffect(() => {
    return () => {
      handleResetState();
    };
  }, [userData, handleResetState]);

  return (
    <section data-testid={userData.expeditionInfo.name}>
      <ConditionalContainer isRender={dialog !== null}>
        <Dialog dialog={dialog} setDialog={setDialog} />
      </ConditionalContainer>
      <Styled.Top>
        <Styled.ButtonContainer>
          <Button onClick={setExpeditionDialog} data-testid="expedition-button">
            <Text>원정대 캐릭터 보기</Text>
          </Button>
        </Styled.ButtonContainer>
        <BasicInfo userData={userData} />
      </Styled.Top>
      <Styled.Bottom>
        <Navigation
          arr={mainNavs}
          selectedNav={mainNav}
          setNav={handleMainNavigation}
          navType="main"
        />
        <MapContainer data={subNavs} dataKey="arr">
          <Navigation
            upperNav={mainNav}
            selectedNav={subNav}
            setNav={setSubNav}
            navType="sub"
          />
        </MapContainer>
        <Styled.Container data-testid="content">
          <VisibleContainer type="main" selected={mainNav}>
            <AbilityContainer
              userData={userData}
              subNav={subNav}
              setDialog={setDialog}
            />
            <SkillContainer
              userData={userData}
              subNav={subNav}
              setDialog={setDialog}
            />
            <CollectionContainer userData={userData} subNav={subNav} />
          </VisibleContainer>
        </Styled.Container>
      </Styled.Bottom>
    </section>
  );
};

export default React.memo(UserInfo, () => true);
