import React, { useMemo, useState } from 'react';

import * as Styled from '@/components/home/timerList/timerList.style';
import { useBrowserFocus } from '@/hooks/useBrowserFocus';

export interface ITimerList {
	data: any[];
	rerenderKey?: null | Date;
	notification: (...args: any[]) => void;
}

const TimerList = ({ data, rerenderKey, notification }: ITimerList) => {
	const [, setTime] = useState<number | null>(null);
	const date = new Date();
	// 특정 타이머가 종료되어 setTime이 다시 호출되어 리렌더링 되는데, 자정이 넘어간 상태일 경우
	const isMustUseBefore =
		rerenderKey && date.getDate() !== rerenderKey.getDate() ? true : false;
	const min =
		date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	const now = Number(String(date.getHours()) + String(min));

	const replacedData = data
		.map((d) => {
			let cachedTime = isMustUseBefore ? [...d.additionalTime] : [...d.time];
			let cachedPosition =
				typeof d.position !== 'string' ? [...d.position] : d.position;
			// 앞에서부터 종료된 시간은 제거
			while (Number(replaceColon(cachedTime[0])) + 3 <= now) {
				if (typeof d.position !== 'string') cachedPosition.shift();
				cachedTime.shift();

				// 모든 시간이 현재시간보다 작다면, 자정지난 첫 컨텐츠로 실행
				if (!cachedTime.length && !rerenderKey) {
					cachedTime = [...d.time];
					cachedPosition =
						typeof d.position !== 'string' ? [...d.position] : d.position;
					break;
				}
				// rerenderKey는 있어도 추가시간이 없는 캘린더가 있어서 rerenderKey가 존재한다는 조건은 사용불가능
				if (!cachedTime.length && d.additionalTime) {
					cachedTime = [...d.additionalTime];
					cachedPosition = d.position;
					break;
				}
			}

			return {
				...d,
				time: cachedTime,
				position: cachedPosition,
			};
		})
		.sort((a, b) => {
			// 종료시간이 현재시간보다 이전의 시간일 경우 내일의 시간이므로 +2400
			const time_a = beforeCurTime(replaceColon(a.time[0]), now);
			const time_b = beforeCurTime(replaceColon(b.time[0]), now);

			if (time_b !== 0 && !time_b) return -1;
			if (time_a > time_b) return 1;
			if (time_a < time_b) return -1;

			return 0;
		});

	const dataLength = replacedData.length;
	const dispatcher = useMemo(
		() => ({
			setTime,
			notification,
		}),
		[notification],
	);

	useBrowserFocus();

	return (
		<>
			{dataLength === 0 && <Styled.Alert>다음에 만나요</Styled.Alert>}
			{dataLength !== 0 && (
				<Styled.TimerList
					data={replacedData}
					item={Styled.Timer}
					dispatcher={dispatcher}
				/>
			)}
		</>
	);
};

function replaceColon(string: string) {
	return Number(string?.replace(':', ''));
}

function beforeCurTime(time: number, now: number) {
	return time + 3 <= now ? (time += 2400) : time;
}

export default React.memo(TimerList, (prev, next) => {
	// 리셋타임은 6시
	if (prev.rerenderKey !== next.rerenderKey) return false;
	return true;
});
