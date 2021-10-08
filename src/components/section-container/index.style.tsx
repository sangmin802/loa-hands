import styled from "styled-components";
import Text from "components/text";

const Title = styled(Text)`
  margin-bottom: 10px;
  padding: 0.3rem;
  border-radius: 3px 3px 0 0;
  text-align: center;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

export { Title };
