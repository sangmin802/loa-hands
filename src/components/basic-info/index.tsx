import React from "react";
import Lodash from "lodash";
import { Image, Text, Collection } from "../";
import * as Styled from "./index.styles";

const BasicInfo = ({ userData, collection }) => {
  const { basicInfo, expeditionInfo } = userData;
  const {
    className,
    classSrc,
    curBigLv,
    curSmallLv,
    expeditionLv,
    garden,
    guild,
    pvp,
    reachBigLv,
    reachSmallLv,
    title,
  } = basicInfo;
  const { name, server, Lv } = expeditionInfo;

  return (
    <>
      <Styled.Container>
        <Styled.Content type="title">
          <Text>클래스</Text>
        </Styled.Content>
        <Styled.Content>
          <Image src={classSrc} />
          <Text>{className}</Text>
        </Styled.Content>
      </Styled.Container>
      <Styled.Container>
        <Styled.InnerContainer>
          <Styled.Content type="title">
            <Text>이름</Text>
          </Styled.Content>
          <Styled.Content>
            <Text>
              {Lv} {name}
            </Text>
          </Styled.Content>
        </Styled.InnerContainer>
        <Styled.InnerContainer>
          <Styled.Content type="title">
            <Text>원정대 레벨</Text>
          </Styled.Content>
          <Styled.Content>
            <Text>
              {server} Lv {expeditionLv}
            </Text>
          </Styled.Content>
        </Styled.InnerContainer>
      </Styled.Container>
      <Styled.Container>
        <Styled.InnerContainer>
          <Styled.Content type="title">
            <Text>현재 아이템 레벨</Text>
          </Styled.Content>
          <Styled.Content>
            <Text>
              {curBigLv} <small>{curSmallLv}</small>
            </Text>
          </Styled.Content>
        </Styled.InnerContainer>
        <Styled.InnerContainer>
          <Styled.Content type="title">
            <Text>달성 아이템 레벨</Text>
          </Styled.Content>
          <Styled.Content>
            <Text>
              {reachBigLv} <small>{reachSmallLv}</small>
            </Text>
          </Styled.Content>
        </Styled.InnerContainer>
      </Styled.Container>
      <Styled.Container>
        <Styled.InnerContainer>
          <Styled.Content type="title">
            <Text>영지</Text>
          </Styled.Content>
          <Styled.Content>
            <Text>{garden}</Text>
          </Styled.Content>
        </Styled.InnerContainer>
        <Styled.InnerContainer>
          <Styled.Content type="title">
            <Text>PVP</Text>
          </Styled.Content>
          <Styled.Content>
            <Text>{pvp}</Text>
          </Styled.Content>
        </Styled.InnerContainer>
      </Styled.Container>
      <Styled.Container>
        <Styled.InnerContainer>
          <Styled.Content type="title">
            <Text>칭호</Text>
          </Styled.Content>
          <Styled.Content>
            <Text>{title}</Text>
          </Styled.Content>
        </Styled.InnerContainer>
        <Styled.InnerContainer>
          <Styled.Content type="title">
            <Text>길드</Text>
          </Styled.Content>
          <Styled.Content>
            <Text>{guild}</Text>
          </Styled.Content>
        </Styled.InnerContainer>
      </Styled.Container>
      <Styled.Collection>{Collection({ collection })}</Styled.Collection>
    </>
  );
};

export default React.memo(BasicInfo, (left, right) =>
  Lodash.isEqual(left, right)
);
