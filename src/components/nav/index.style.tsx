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

  sub: css<{ isFlex: boolean }>`
    width: 100%;
    border-radius: 0 5px 0 0;

    ${({ theme }) => theme.isFlex}

    ${button}

    &:nth-of-type(4) button {
      flex-grow: 1;
      margin-right: 0;
    }
  `,
};

export const Container = styled.article<{ isFlex: boolean; type: string }>`
  padding: 0.5rem;
  display: flex;
  width: fit-content;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
  ${({ type }) => containerType[type]}
`;
