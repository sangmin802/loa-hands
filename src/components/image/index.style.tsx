import styled from "styled-components";

const Image = styled.img<{ color: string }>`
  display: block;
  width: 100%;

  background: ${({ color, theme }) => theme.gradientColor[color]};
`;

export { Image };
