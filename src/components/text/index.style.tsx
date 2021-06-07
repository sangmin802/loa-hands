import styled, { css } from "styled-components";

interface Props {
  grade: number;
  type: string;
}

export const Text = styled.div<Partial<Props>>`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  color: ${({ grade, theme }) => theme.fontColor[`color${grade}`]};
  font-size: ${({ type, theme }) => theme.fontSize[type]};
`;
