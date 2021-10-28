import styled from "styled-components";
import List from "components/list/list";
import Image from "components/image/";

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ItemThumbnail = styled(Image)<{ color: string }>`
  width: 20%;
  min-width: 60px;
  margin-right: 0.5rem;

  ${({ theme }) => theme.contentBox}
  background : ${({ theme, color }) => theme.gradientColor[color]};
`;

const TitleBox = styled.div`
  width: calc(80% - 0.5rem - 0.1px);
  min-width: calc(100% - 0.5rem - 60.1px);
`;

const SectionList = styled(List)`
  margin-top: 0.5rem;
`;

const Rune = styled.article`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const RuneThumbnail = styled(Image)<{ color: string }>`
  flex-basis: 10%;
  min-width: 30px;
  flex-shrink: 0;
  margin-right: 0.5rem;

  ${({ theme }) => theme.contentBox}
  background : ${({ theme, color }) => theme.gradientColor[color]};
`;

const RuneDescBox = styled.div``;

const Quality = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;

  ${({ theme }) => theme.contentBox}
`;

const QualityBar = styled.div<{ width: string; color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;

  width: ${({ width }) => width}%;
  background: ${({ theme, color }) => theme.gradientColor[color]};
`;

const RuneInfo = styled.div`
  color: white;
  font-size: 0.9rem;
`;

export {
  Top,
  Container,
  TitleBox,
  SectionList,
  ItemThumbnail,
  Rune,
  RuneDescBox,
  RuneThumbnail,
  Quality,
  QualityBar,
  RuneInfo,
};
