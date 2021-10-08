import styled from "styled-components";
import Button from "components/button";
import MapContainer from "components/map-container";

const Navigation = styled(MapContainer)`
  padding: 0.5rem;
  width: fit-content;
  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const NavigationButton = styled(Button)`
  width: fit-content;
  margin-right: 1rem;
  color: #666;
`;

export { Navigation, NavigationButton };
