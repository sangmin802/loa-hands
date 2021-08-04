import styled, { css } from "styled-components";

const button = css`
  > button {
    width: fit-content;
    margin-right: 1rem;
    color: #666;
  }
`;

const containerType = {
  main: css`
    border-radius: 5px 5px 0 0;

    ${button}
  `,

  sub: css<{ isShow: boolean }>`
    width: 100%;
    border-radius: 0 5px 0 0;

    ${button}
    ${({ theme }) => theme.isShow}

    &:nth-of-type(4) {
      ${({ theme }) => theme.isFlex}

      & > button {
        flex-grow: 1;
        margin-right: 0;
      }
    }
  `,
};

export const Container = styled.article<{ isShow: boolean; type: string }>`
  padding: 0.5rem;
  width: fit-content;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
  ${({ type }) => containerType[type]}
`;
