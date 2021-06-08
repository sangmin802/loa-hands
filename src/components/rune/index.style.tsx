import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  margin-top: 0.5rem;

  .img-container {
    width: 12%;
    min-width: 30px;
    margin-right: 0.5rem;

    img {
      ${({ theme }) => theme.contentBox}
    }
  }
`;

export const Desc = styled.div`
  width: calc(88% - 0.5rem - 0.1px);
  min-width: calc(100% - 0.5rem - 30.1px);
`;
