import styled from "styled-components";

export const Container = styled.article<{ hover: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  border-radius: 3px;

  &:last-chid {
    margin-bottom: 0;
  }

  cursor: ${({ hover }) => (hover ? "pointer" : "")};
  background: ${({ theme }) => theme.backgroundColor.darkLow};

  .img-container {
    width: 12%;
    min-width: 40px;
    margin-right: 0.5rem;
    img {
      ${({ theme }) => theme.contentBox}
    }
  }
`;

export const Desc = styled.div`
  width: calc(88% - 0.5rem -0.1px);
  min-width: calc(100% - 0.5rem - 40.1px);
`;
