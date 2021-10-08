import styled from "styled-components";
import DoubleListContainer from "components/double-list-container";

const EngraveDoubleListContainer = styled(DoubleListContainer)`
  margin-bottom: 2rem;
  & .engrave-item {
    margin-bottom: 1.5rem;

    & .text {
      margin-bottom: 0.3rem;
    }
  }
`;

export { EngraveDoubleListContainer };
