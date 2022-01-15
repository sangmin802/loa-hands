import styled from "styled-components";
import Text from "components/common/text/text";
import TimerItem from "pages/home/timerList/timerItem/timerItem";
import List from "components/common/list/list";

const Alert = styled(Text)`
  text-align: center;
`;

const TimerList = styled(List)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Timer = styled(TimerItem)`
  flex-basis: calc((100% / 3) - 3.4px);
`;

export { Alert, TimerList, Timer };
