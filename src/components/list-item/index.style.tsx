import Image from "components/image";
import styled, { css } from "styled-components";

const containerType = {
  normal: css`
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
    ${({ theme }) => theme.contentBox}
  `,
  collection: css`
    display: none;
  `,
};

const Container = styled.article<{ hover: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.3rem;
  border-radius: 3px;

  cursor: ${({ hover }) => (hover ? "pointer" : "")};
  background: ${({ theme }) => theme.backgroundColor.darkLow};
`;

const Thumbnail = styled(Image)<{ type: string }>`
  ${({ type }) => {
    const index = type === "collection" ? type : "normal";
    return containerType[index];
  }}
`;

const descType = {
  normal: css`
    width: calc(100% - 0.5rem - 40.1px);
  `,
  collection: `
    display: flex;
    div:first-child {
      margin-right: 0.3rem;
    }
  `,
};

const Desc = styled.div<{ type: string }>`
  ${({ type }) => {
    const index = type === "collection" ? type : "normal";
    return descType[index];
  }}
`;

export { Container, Desc, Thumbnail };
