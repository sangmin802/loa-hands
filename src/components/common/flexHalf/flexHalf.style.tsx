import styled from "styled-components";

const FlexContainer = styled.article`
  display: flex;
  gap: 5px;
`;

const HalfContainer = styled.article`
  flex-basis: 50%;
  overflow: hidden;
`;

export { FlexContainer, HalfContainer };
