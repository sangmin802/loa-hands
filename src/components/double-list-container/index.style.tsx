import styled, { css } from "styled-components";
import ListContainer from "components/list-container";

const contentType = {
  left: css`
    margin-right: 0.5rem;
  `,
  right: css``,
};

const DoubleListContainer = styled.article`
  display: flex;
`;

export const StyledListContainer = styled(ListContainer)<{ type: string }>`
  width: calc((100% - 0.5rem -0.1px) / 2);

  ${({ type }) => contentType[type]}
`;

export { DoubleListContainer, StyledListContainer as ListContainer };
