import styled, { css } from "styled-components";

const contentType = {
  title: css`
    margin-right: 0.3rem;
    border-radius: 3px;
    border: 1px solid #f0f4f5;
    background: #1f222a;
    padding: 0.2rem 0.6rem;
    overflow: initial;
  `,
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  width: calc((100% - 0.5rem) / 2 - 0.1px);
  margin-right: 0.5rem;
`;

export const Content = styled.div<{ type?: string }>`
  width: fit-content;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-right: 0.5rem;

  & .img-container {
    width: 12%;
    min-width: 40px;
    margin-right: 0.5rem;
  }

  ${({ type }) => (type ? contentType[type] : "")}
`;

export const Collection = styled.div`
  display: flex;
  margin-top: 15px;
`;
