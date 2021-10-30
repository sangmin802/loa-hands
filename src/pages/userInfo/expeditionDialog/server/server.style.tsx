import styled from "styled-components";
import Text from "components/text/text";
import List from "components/list/list";
import Char from "../char/char";
import SectionContainer from "components/sectionContainer/sectionContainer";

const Server = styled(SectionContainer)`
  flex-direction: column;
`;

const ServerName = styled(Text)`
  margin-bottom: 0.3rem;
`;

const CharList = styled(List)`
  flex-wrap: wrap;
  flex-direction: row;
`;

const CharItem = styled(Char)`
  flex-basis: calc((100% / 2) - 2.5px);
  overflow: hidden;
`;

export { Server, ServerName, CharList, CharItem };
