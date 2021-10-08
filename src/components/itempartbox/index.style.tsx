import styled from "styled-components";

const ItemPartBox = styled.article`
  margin-top: 0.5rem;

  * {
    font-size: ${({ theme }) => theme.fontSize["desc"]};
  }
`;

export { ItemPartBox };
