import styled from "styled-components";
import Image from "components/common/image/image";
import Button from "components/common/button/button";
import SectionContainer from "components/common/sectionContainer/sectionContainer";
import Text from "components/common/text/text";

const UserInfo = styled.section`
  padding: 0.5rem;
`;

const Top = styled.section`
  position: relative;
  border-radius: 3px;
  padding: 1rem 0.5rem 1rem;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const Bottom = styled.section`
  margin-top: 1rem;
`;

const ExpeditionButton = styled(Button)`
  margin-left: auto;
  display: block;
  margin-left: auto;
  padding: 0.3rem;

  ${({ theme }) => theme.contentBox}
  background: ${({ theme }) => theme.backgroundColor.darkLow};
`;

const NAVContent = styled.section`
  padding: 0.5rem;
  border-radius: 0 0 5px 5px;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const Navigation = styled.section`
  width: fit-content;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
`;

const NAVButton = styled(Button)<{ selected: boolean; isCollection?: boolean }>`
  padding: 0.5rem;
  width: fit-content;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
  color: ${({ selected }) => (selected ? "#fff" : "#666")};
`;

const BasicInfoLabel = styled(SectionContainer)`
  align-items: center;
  height: 30px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Label = styled(Text)`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 0.2rem 0.6rem;
  overflow: initial;

  ${({ theme }) => theme.contentBox}
  background : ${({ theme }) => theme.backgroundColor.darkLow};
`;

const ClassThumbnail = styled(Image)`
  width: 30px;
  height: inherit;
`;

export {
  UserInfo,
  Top,
  Bottom,
  ExpeditionButton,
  NAVContent,
  Navigation,
  BasicInfoLabel,
  ClassThumbnail,
  NAVButton,
  Label,
};
