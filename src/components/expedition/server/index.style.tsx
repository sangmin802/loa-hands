import styled from "styled-components";
import Text from "components/text";
import MapContainer from "components/map-container";

const Server = styled.article`
  margin-bottom: 20px;
`;

const ServerName = styled(Text)`
  margin-bottom: 0.3rem;
`;

const CharList = styled(MapContainer)`
  display: flex;
  flex-wrap: wrap;
`;

export { Server, ServerName, CharList };
