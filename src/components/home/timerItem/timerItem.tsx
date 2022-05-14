import { useCallback, useEffect, useMemo } from 'react';

import Image from '@/components/common/image/image';
import Text from '@/components/common/text/text';
import { URL } from '@/constants/env';
import { useConditionalTimer } from '@/pages/home/hooks/useConditionalTimer';
import { useTimer } from '@/pages/home/hooks/useTimer';
import { interval } from '@/utils/events/interval';

import * as Styled from './timerItem.style';

export interface TimerProps {
	data: {
		name: string;
		src: string;
		lv: string;
		time: string[];
		endTime: string;
		position: string;
		endPosition: string;
	};
	dispatcher: {
		setTime: (T: number | string) => void;
		notification: (...args: any[]) => void;
	};
}

function TimerItem({ data, dispatcher, ...props }: TimerProps) {
	const { setTime, notification } = dispatcher;
	const { name, src, lv, time, endTime, position, endPosition } = data;
	const pos =
		typeof position !== 'string' ? position[0] || endPosition : position;

	const { restTime, calcTimer, calcRestTimeProps } = useTimer();
	const {
		timerTypeConts: { borderColor, endTimeBg, contentAlert },
		calcConditionalRestTime,
		calcCloseTime,
		setTimerType,
		timerType,
	} = useConditionalTimer(time, endTime, setTime);

	const timer = useCallback(
		(time: string[]) => {
			const now = new Date();
			const startTime = time[0];
			const closeTime = calcCloseTime(startTime, now);
			const restTime = calcTimer(closeTime, now.getTime());
			const conditionalRestTime = calcConditionalRestTime(
				closeTime,
				now,
				restTime,
			);
			calcRestTimeProps(conditionalRestTime);
		},
		[calcConditionalRestTime, calcRestTimeProps, calcTimer, calcCloseTime],
	);

	const { start, cancel } = useMemo(() => interval(1, timer), [timer]);

	useEffect(() => {
		if (time.length) start(time);
		if (!time.length) setTimerType('END');

		return () => {
			cancel();
		};
	}, [time, start, setTimerType, cancel]);

	useEffect(() => {
		if (timerType === 'END') calcRestTimeProps(null);
	}, [timerType, calcRestTimeProps]);

	useEffect(() => {
		if (timerType === 'READY') notification({ name, type: 'READY' });
		if (timerType === 'START') notification({ name, type: 'START' });
	}, [name, notification, timerType]);

	return (
		<Styled.Timer
			{...props}
			data-testid={timerType}
			data-time={new Date()}
			borderColor={borderColor}
		>
			<Styled.Background isShow={endTimeBg} />
			<Styled.TimerTitle size="0.9">{name}</Styled.TimerTitle>
			<Styled.Content>
				<Styled.TimerImg>
					<Image src={`${URL}${src}`} />
					<Styled.TimerLv size="0.7">{lv}</Styled.TimerLv>
				</Styled.TimerImg>
				<Styled.Time>
					<Text
						size="0.9"
						role="timer-alert"
					>
						{contentAlert}
					</Text>
					<Text
						size="0.9"
						role="timeout"
						color="timeOut"
					>
						{restTime
							? `${restTime.hour}:${restTime.min}:${restTime.sec}`
							: '종료'}
					</Text>
				</Styled.Time>
			</Styled.Content>
			<Styled.TimerPosition size="0.9">{pos}</Styled.TimerPosition>
		</Styled.Timer>
	);
}

export default TimerItem;
