import styled from "styled-components";
import Button from "components/button";

const Char = styled.article`
  width: 50%;
  padding: 0.5rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.backgroundColor.darkLow};
  }
`;

const CharButton = styled(Button)`
  width: 100%;
  text-align: left;
`;

export { Char, CharButton };
