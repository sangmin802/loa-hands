import styled from "styled-components";
import SectionContainer from "components/sectionContainer/sectionContainer";
import Button from "components/button";
import Text from "components/text";

const Home = styled.section`
  padding: 0.5rem;
`;

const Section = styled(SectionContainer)`
  flex-direction: column;
  margin-top: 0.7rem;
`;

const SectionTitle = styled(Text)`
  background: ${({ theme }) => theme.backgroundColor.darkDeep};
  border-radius: 3px 3px 0 0;
  text-align: center;
  padding: 0.3rem 0;
`;

const Notification = styled(Button)`
  width: fit-content;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.4rem;

  ${({ theme }) => theme.contentBox};
  background: ${({ theme }) => theme.backgroundColor.darkDeep};
  border-radius: 3px 3px 3px 0;
`;

export { Home, Section, SectionTitle, Notification };
