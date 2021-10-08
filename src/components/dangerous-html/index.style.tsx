import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) => theme.fontColor["white"]};
  font-size: ${({ theme }) => theme.fontSize["desc"]};
  * {
    font-size: inherit;
  }
`;
export { Container };
