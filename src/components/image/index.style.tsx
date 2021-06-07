import styled from "styled-components";

export const Image = styled.image<{ grade: number }>`
  display: block;
  width: 100%;

  background: ${({ grade, theme }) => theme.gradientColor[`gradient${grade}`]};
`;
