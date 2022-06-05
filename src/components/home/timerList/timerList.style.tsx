import styled from 'styled-components';

import List from '@/components/common/list/list';
import Text from '@/components/common/text/text';
import TimerItem from '@/components/home/timerItem/timerItem';

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

export { Alert, Timer, TimerList };
