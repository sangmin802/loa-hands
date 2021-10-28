import styled from "styled-components";
import SectionContainer from "components/sectionContainer/sectionContainer";
import Text from "components/text";

const Section = styled(SectionContainer)`
  flex-direction: column;
`;

const SectionTitle = styled(Text)`
  background: ${({ theme }) => theme.backgroundColor.darkDeep};
  border-radius: 3px;
  text-align: center;
  padding: 0.3rem 0;
`;

export { Section, SectionTitle };
