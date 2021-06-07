import styled, { css } from "styled-components";

interface Props {
  grade: number;
  type: string;
}

const gradeColor = {
  0: "#a19f9f",
  1: "#4e8d01",
  2: "#0063aa",
  3: "#700099",
  4: "#ff9500",
  5: "#ff5e00",
};

const textType = {
  normal: css`
    font-size: 1rem;
  `,
  desc: css`
    font-size: 0.9rem;
  `,
  subTitle: css`
    font-size: 0.8rem;
  `,
  title: css`
    font-size: 1.2rem;
  `,
};

export const Text = styled.div<Partial<Props>>`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  color: ${({ grade }) => gradeColor[grade]};
  ${({ type = "normal" }) => textType[type]};
`;
