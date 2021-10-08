import styled from "styled-components";

const IndengString = styled.article`
  margin-top: 0.5rem;

  * {
    font-size: ${({ theme }) => theme.fontSize["desc"]};
  }
`;

export { IndengString };
