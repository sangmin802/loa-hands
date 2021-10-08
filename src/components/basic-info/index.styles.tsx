import styled, { css } from "styled-components";
import Image from "components/image";

const contentType = {
  title: css`
    margin-right: 0.3rem;
    padding: 0.2rem 0.6rem;
    overflow: initial;

    ${({ theme }) => theme.contentBox}
    background : ${({ theme }) => theme.backgroundColor.darkLow};
  `,
};

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
`;

const InnerContainer = styled.div`
  display: flex;
  width: calc((100% - 0.5rem) / 2 - 0.1px);
  margin-right: 0.5rem;
`;

const Content = styled.div<{ type?: string }>`
  width: fit-content;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-right: 0.5rem;

  ${({ type }) => (type ? contentType[type] : "")}
`;

const ClassThumbnail = styled(Image)`
  width: 12%;
  min-width: 40px;
  margin-right: 0.5rem;
`;

const Collection = styled.div`
  display: flex;
  margin-top: 15px;
`;

export { Container, InnerContainer, Content, Collection, ClassThumbnail };
