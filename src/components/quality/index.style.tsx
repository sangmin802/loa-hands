import styled from "styled-components";

const Quality = styled.article`
  position: relative;
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.contentBox}
`;

const Background = styled.div<{ color: string; width: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;

  width: ${({ width }) => width}%;
  background: ${({ theme, color }) => theme.gradientColor[color]};
`;

export { Quality, Background };
