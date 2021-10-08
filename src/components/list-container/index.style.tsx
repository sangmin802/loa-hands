import styled from "styled-components";
import Text from "components/text";
import MapContainer from "components/map-container";

const ListTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.desc};
  margin-bottom: 1rem;
  text-align: center;
`;

const ListContent = styled(MapContainer)`
  & > article {
    margin-bottom: 0.5rem;
    &: last-child {
      margin-bottom: 0;
    }
`;

export { ListTitle, ListContent };
