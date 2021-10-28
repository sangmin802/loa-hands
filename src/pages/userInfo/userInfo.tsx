import React, { Dispatch, ReactElement } from "react";
import { useUser } from "hooks/use-user";
import { useNavigation } from "hooks/use-navigation";
import Text from "components/text";
import Ability from "pages/userInfo/ability/ability";
import Skill from "pages/userInfo/skill/skill";
import SearchLoading from "pages/userInfo/searchLoading";
import UserCollection from "./userCollection/userCollection";
import FlexHalf from "components/flexHalf/flexHalf";
import ErrorFallback from "components/errorFallback";
import LoadingSpinner from "components/loadingSpinner";
import AsyncBoundary from "components/asyncBoundary";
import * as Styled from "./userInfo.style";

interface IUserInfo {
  userKey: string[];
  userCollectionKey: string[];
  setDialog?: Dispatch<ReactElement>;
}

const navList = ["능력치", "스킬", "수집형포인트"];

function UserInfo({ userKey, userCollectionKey, setDialog }: IUserInfo) {
  const { status, data: userData } = useUser(userKey);
  const { nav, handleNavDelegation } = useNavigation([userKey]);

  if (status === "loading") return <SearchLoading />;

  const { basicInfo: BI, expeditionInfo: EI } = userData;

  return (
    <Styled.UserInfo data-testid={EI.name}>
      <Styled.Top>
        <Styled.ExpeditionButton
          userData={userData}
          setDialog={setDialog}
          data-testid="expedition-button"
        />
        <Styled.BasicInfoLabel title={<Styled.Label>클래스</Styled.Label>}>
          <Styled.ClassThumbnail src={BI.classSrc} />
          <Text>{BI.className}</Text>
        </Styled.BasicInfoLabel>
        <FlexHalf
          left={
            <Styled.BasicInfoLabel title={<Styled.Label>이름</Styled.Label>}>
              <Text>
                {EI.Lv} {EI.name}
              </Text>
            </Styled.BasicInfoLabel>
          }
          right={
            <Styled.BasicInfoLabel
              title={<Styled.Label>원정대 레벨</Styled.Label>}
            >
              <Text size="0.9">
                {EI.server} Lv {BI.expeditionLv}
              </Text>
            </Styled.BasicInfoLabel>
          }
        />
        <FlexHalf
          left={
            <Styled.BasicInfoLabel
              title={<Styled.Label>현재 아이템 레벨</Styled.Label>}
            >
              <Text size="0.9">
                {BI.curBigLv} <small>{BI.curSmallLv}</small>
              </Text>
            </Styled.BasicInfoLabel>
          }
          right={
            <Styled.BasicInfoLabel
              title={<Styled.Label>달성 아이템 레벨</Styled.Label>}
            >
              <Text size="0.9">
                {BI.reachBigLv} <small>{BI.reachSmallLv}</small>
              </Text>
            </Styled.BasicInfoLabel>
          }
        />
        <FlexHalf
          left={
            <Styled.BasicInfoLabel title={<Styled.Label>영지</Styled.Label>}>
              <Text size="0.9">{BI.garden}</Text>
            </Styled.BasicInfoLabel>
          }
          right={
            <Styled.BasicInfoLabel title={<Styled.Label>PVP</Styled.Label>}>
              <Text size="0.9">{BI.pvp}</Text>
            </Styled.BasicInfoLabel>
          }
        />
        <FlexHalf
          left={
            <Styled.BasicInfoLabel title={<Styled.Label>칭호</Styled.Label>}>
              <Text size="0.9">{BI.title}</Text>
            </Styled.BasicInfoLabel>
          }
          right={
            <Styled.BasicInfoLabel title={<Styled.Label>길드</Styled.Label>}>
              <Text size="0.9">{BI.guild}</Text>
            </Styled.BasicInfoLabel>
          }
        />
      </Styled.Top>
      <Styled.Bottom>
        <Styled.Navigation onClick={handleNavDelegation}>
          {navList.map((name, i) => (
            <Styled.NAVButton data-id={i} key={i} selected={nav === i}>
              {name}
            </Styled.NAVButton>
          ))}
        </Styled.Navigation>
        <Styled.NAVContent data-testid="content">
          {nav === 0 && <Ability userData={userData} setDialog={setDialog} />}
          {nav === 1 && <Skill userData={userData} setDialog={setDialog} />}
          {nav === 2 && (
            <AsyncBoundary
              suspenseFallback={<LoadingSpinner />}
              errorFallback={<ErrorFallback />}
              keys={userCollectionKey}
            >
              <UserCollection
                queryKey={userCollectionKey}
                member={userData.memberArr}
              />
            </AsyncBoundary>
          )}
        </Styled.NAVContent>
      </Styled.Bottom>
    </Styled.UserInfo>
  );
}

export default React.memo(UserInfo);
