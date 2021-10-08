import styled from "styled-components";
import MapContainer from "components/map-container";
import Text from "components/text";
import Timer from "components/timer";

const Alert = styled(Text)`
  text-align: center;
`;

const TimerContainer = styled(MapContainer)`
  display: flex;
  flex-wrap: wrap;
`;

const TimerWrapper = styled(Timer)`
  width: calc((100% - 4%) / 3 - 0.01px);
  margin-right: 2%;
  margin-bottom: 2%;

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export { Alert, TimerContainer, TimerWrapper };
