import styled from "styled-components";

export const Container = styled.div<{ isLoading: boolean }>`
  position: relative;
  ${({ theme, isLoading }) => (isLoading ? theme.isLoading : "")}
`;
export const InnerContainer = styled.section`
  padding: 0.5rem;
`;

export const Main = styled.main`
  max-width: 600px;
  min-width: 310px;
  margin: 0 auto;
  padding: 0.5rem;
  border-radius: 3px;

  background: ${({ theme }) => theme.backgroundColor.darkLow};
`;

export const HeaderContainer = styled.div`
  margin-bottom: 1.5rem;
`;
