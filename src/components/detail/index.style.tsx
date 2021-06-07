import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .img-container {
    width: 20%;
    min-width: 60px;
    margin-right: 0.5rem;
    border-radius: 3px;
    border: 1px solid #f0f4f5;
  }
`;

export const Desc = styled.div`
  width: calc(80% - 0.5rem - 0.1px);
  min-width: calc(100% - 0.5rem - 60.1px);
`;
