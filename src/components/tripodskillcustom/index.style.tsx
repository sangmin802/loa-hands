import styled, { css } from "styled-components";

export const Content = styled.article<{ src: string }>`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  .img-container {
    ${({ src }) => (src ? "width: 10%; min-width: 30px;" : "")}

    img {
      ${({ theme, src }) => (src ? theme.contentBox : "")}
    }
  }
  * {
    font-size: ${({ theme }) => theme.fontSize["desc"]};
  }
`;

const textContainerType = {
  title: css<{ src: string }>`
    ${({ src }) => (src ? "width: 17%; margin: 0 0.5rem;" : "")}
  `,
  desc: css<{ src: string }>`
    ${({ src }) =>
      src
        ? "width: calc(73% - 1rem - 0.1px); min-width: calc(100% - 1rem- 30.1px);"
        : ""}
  `,
};

export const TextContainer = styled.article<{ type: string; src: string }>`
  ${({ type }) => textContainerType[type]}
`;
