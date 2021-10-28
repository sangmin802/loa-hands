import styled from "styled-components";
import Button from "components/button";

const ExpeditionButton = styled(Button)`
  display: block;
  margin-left: auto;
  padding: 0.3rem;

  ${({ theme }) => theme.contentBox}
  background: ${({ theme }) => theme.backgroundColor.darkLow};
`;

export { ExpeditionButton };
