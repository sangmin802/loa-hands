import styled from "styled-components";

const fontColor: { [key: string]: string } = {
  color0: "#a19f9f",
  color1: "#4e8d01",
  color2: "#0063aa",
  color3: "#700099",
  color4: "#ff9500",
  color5: "#ff5e00",
  color6: "#dcc999",
  color7: "#2faba8",
  white: "#f0f4f5",
  "#666": "#666",
  timeOut: "#ff9933",
  colorget: "#b3e27a",
  colornoGet: "#e76f6b",
};

const Text = styled.div<{ color: string; size: string }>`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-break: keep-all;

  color: ${({ color }) => fontColor[color]};
  font-size: ${({ size }) => size}rem;
`;

export { Text };
