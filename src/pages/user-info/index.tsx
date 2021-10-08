import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useUser } from "hooks/use-user";
import { useNavigation } from "hooks/use-navigation";
import { useHistory } from "react-router-dom";
import * as Styled from "./index.style";
import { useUserCollection } from "hooks/use-user-collection";
import { useCancelQuery } from "hooks/use-cancel-query";
import BasicInfo from "components/basic-info";
import Expedition from "components/expedition";
import Dialog from "components/dialog";
import Text from "components/text";
import AbilityContainer from "components/ability-container";
import SkillContainer from "components/skill-container";
import AsyncBoundary from "components/async-boundary";
import LoadingSpinner from "components/loading-spinner";
import ErrorFallback from "components/error-fallback";
import Collection from "components/collection";
import SearchLoading from "components/search-loading";
import ErrorBoundary from "components/error-boundary";
import ConditionalRender from "components/conditional-render";
import MapContainer from "components/map-container";

interface IFetchUserCollection {
  member: string[];
  queryKey: string[];
  subNav: number;
}

interface IFetchUserInfo {
  userKey: string[];
  userCollectionKey: string[];
}

interface IUserInfo {
  match?: {
    params: {
      name: string;
    };
  };
}

const UserInfo = ({
  match: {
    params: { name },
  },
}: IUserInfo) => {
  const [userKey, userCollectionKey] = useMemo(
    () => [
      ["userInfo", name],
      ["userCollection", name],
    ],
    [name]
  );

  useCancelQuery([userCollectionKey]);

  return (
    <ErrorBoundary errorFallback={<ErrorFallback />} keys={name}>
      <FetchUserInfo userKey={userKey} userCollectionKey={userCollectionKey} />
    </ErrorBoundary>
  );
};

const FetchUserInfo = React.memo(function ({
  userKey,
  userCollectionKey,
}: IFetchUserInfo) {
  const history = useHistory();
  const { status, data: userData } = useUser(userKey);
  const nav = useNavigation();
  const [dialog, setDialog] = useState(null);

  const handleResetState = useCallback(() => {
    nav.handleResetNavigation();
    setDialog(null);
  }, [nav.handleResetNavigation]);

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
    [userData, handleSearchUser]
  );

  const setExpeditionDialog = useCallback(() => {
    setDialog(expeditionDialog);
  }, [expeditionDialog]);

  const memoized = useMemo(() => {
    if (!userData) return [, , ,];
    return [
      <AbilityContainer
        userData={userData}
        subNav={nav.subNav}
        setDialog={setDialog}
      />,
      <SkillContainer
        userData={userData}
        subNav={nav.subNav}
        setDialog={setDialog}
      />,
      <AsyncBoundary
        suspenseFallback={<LoadingSpinner />}
        errorFallback={<ErrorFallback />}
        keys={userCollectionKey}
      >
        <FetchUserCollection
          queryKey={userCollectionKey}
          member={userData.memberArr}
          subNav={nav.subNav}
        />
      </AsyncBoundary>,
    ];
  }, [userData, nav.subNav, userCollectionKey]);

  useEffect(() => {
    return () => {
      handleResetState();
    };
  }, [userKey, handleResetState]);

  if (status === "loading") return <SearchLoading />;

  return (
    <Styled.UserInfo data-testid={userData.expeditionInfo.name}>
      <ConditionalRender
        Component={Dialog}
        render={dialog ? true : false}
        dialog={dialog}
        setDialog={setDialog}
      />
      {/* <Dialog
        render={dialog ? true : false}
        dialog={dialog}
        setDialog={setDialog}
      /> */}
      <Styled.Top>
        <Styled.ExpeditionButton
          onClick={setExpeditionDialog}
          data-testid="expedition-button"
        >
          <Text>원정대 캐릭터 보기</Text>
        </Styled.ExpeditionButton>
        <BasicInfo userData={userData} />
      </Styled.Top>
      <Styled.Bottom>
        <Styled.MainNavigation
          arr={nav.mainNavs}
          selectedNav={nav.mainNav}
          setNav={nav.handleMainNavigation}
        />
        <MapContainer data={nav.subNavs} dataKey="arr">
          <Styled.SubNavigation
            isShow={nav.mainNav}
            selectedNav={nav.subNav}
            setNav={nav.setSubNav}
          />
        </MapContainer>
        <Styled.Container data-testid="content">
          {memoized[nav.mainNav]}
        </Styled.Container>
      </Styled.Bottom>
    </Styled.UserInfo>
  );
});

const FetchUserCollection = React.memo(function ({
  queryKey,
  subNav,
  member,
}: IFetchUserCollection) {
  const userCollection = useUserCollection(queryKey, member);

  const memoized = useMemo(() => {
    return userCollection.collectionDetail.map((data, i) => (
      <Collection data={data} mini={userCollection.collectionMini[i]} key={i} />
    ));
  }, [userCollection]);

  return <>{memoized[subNav]}</>;
});

export default UserInfo;
