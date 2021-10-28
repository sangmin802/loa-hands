import styled from "styled-components";
import Button from "components/button/index";

const Navigation = styled.section`
  display: block;
  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const NavButton = styled(Button)<{ selected: boolean }>`
  padding: 0.5rem;
  width: fit-content;
  color: ${({ selected }) => (selected ? "#fff" : "#666")};

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const NAVContent = styled.section`
  margin-top: 0.5rem;
`;

export { Navigation, NavButton, NAVContent };
