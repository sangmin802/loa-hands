import styled from "styled-components";
import Header from "components/header";

const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 0.5rem;
`;

const Main = styled.main`
  max-width: 600px;
  min-width: 310px;
  margin: 0 auto;
  border-radius: 3px;

  background: ${({ theme }) => theme.backgroundColor.darkLow};
`;

const StyledHeader = styled(Header)`
  margin-bottom: 1.5rem;
`;

export { Container, Main, StyledHeader as Header };
