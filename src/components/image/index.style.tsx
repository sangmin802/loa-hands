import styled from "styled-components";

const gradeColor = {
  "gradient-1": "linear-gradient(135deg, #232323, #7a0000)",
  gradient0: "linear-gradient(135deg, #232323, #575757)",
  gradient1: "linear-gradient(135deg, #18220b, #304911)",
  gradient2: "linear-gradient(135deg, #111f2c, #113d5d)",
  gradient3: "linear-gradient(135deg, #261331, #480d5d)",
  gradient4: "linear-gradient(135deg, #362003, #9e5f04)",
  gradient5: "linear-gradient(135deg, #341a09, #a24006)",
};

export const Image = styled.image<{ grade: number }>`
  display: block;
  width: 100%;

  background: ${({ grade }) => gradeColor[`gradient${grade}`]};
`;
