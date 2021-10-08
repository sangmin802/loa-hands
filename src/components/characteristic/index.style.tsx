import styled, { css } from "styled-components";
import Text from "components/text";

const titleType = {
  itemTitle: css`
    display: flex;
    flex-direction: row;
    width: fit-content;
    margin-bottom: 0.5rem;
    padding: 0.1rem 0.3rem;

    ${({ theme }) => theme.contentBox}
    background : ${({ theme }) => theme.backgroundColor.darkLow};
  `,
};

const Container = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  li {
    list-style: none;
    display: inline;
  }
`;

const Item = styled.div`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TitleText = styled(Text)<{ isItem?: boolean }>`
  text-align: center;

  ${({ isItem }) => (isItem ? titleType["itemTitle"] : "")}
`;

export { Container, Item, TitleText };
