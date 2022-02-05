import styled from "styled-components";
import Button from "components/common/button/button";

const Char = styled.article`
  border-radius: 3px;
  cursor: pointer;
`;

const CharButton = styled(Button)`
  width: 100%;
  height: 100%;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.backgroundColor.darkLow};
  }
`;

export { Char, CharButton };
