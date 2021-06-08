import styled from "styled-components";

export const Content = styled.article`
  display: flex;

  * {
    font-size: ${({ theme }) => theme.fontSize["desc"]};
  }
`;
