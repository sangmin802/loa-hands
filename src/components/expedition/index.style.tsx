import styled from "styled-components";

export const Container = styled.section<{ isShow: boolean }>`
  position: absolute;
  display: none;
  width: 85%;
  top: 0;
  right: 0;
  padding: 1.5rem;
  max-height: 600px;
  z-index: 11;

  ${({ theme }) => theme.isShow}
  ${({ theme }) => theme.contentBox}
  background : ${({ theme }) => theme.backgroundColor.darkDeep};
  ${({ theme }) => theme.scrollbar}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
