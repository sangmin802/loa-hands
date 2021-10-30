import styled from "styled-components";
import SectionContainer from "components/sectionContainer/sectionContainer";
import HTML from "components/html/html";
import Text from "components/text/text";

const Characteristic = styled(SectionContainer)`
  flex-direction: column;
  margin-top: 20px;
`;

const ColumnLabel = styled(SectionContainer)`
  flex-direction: column;
`;

const DecorationBatch = styled(HTML)`
  li {
    list-style-position: inside;
    list-style-type: "-";
    padding-left: 10px;
  }
`;

const Label = styled(Text)`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 0.2rem 0.6rem;
  overflow: initial;

  ${({ theme }) => theme.contentBox}
  background : ${({ theme }) => theme.backgroundColor.darkLow};
`;

export { Characteristic, ColumnLabel, DecorationBatch, Label };
