import styled from "styled-components";

const Navigation = styled.section`
	display: block;
	background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const NavButton = styled.div<{ selected: boolean }>`
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem;
  width: fit-content;
  color: ${({ selected }) => (selected ? "#fff" : "#666")};

	background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const NAVContent = styled.section`
	margin-top: 0.5rem;
`;

export { NavButton, NAVContent, Navigation };
