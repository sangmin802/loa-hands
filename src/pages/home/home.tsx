import AsyncBoundary from '@/components/common/asyncBoundary/asyncBoundary';
import ErrorFallback from '@/components/common/errorFallback/errorFallback';
import LoadingSpinner from '@/components/common/loadingSpinner/loadingSpinner';
import Text from '@/components/common/text/text';
import Calendar from '@/components/home/calendar/calendar';
import EventList from '@/components/home/eventList/eventList';
import TimerList from '@/components/home/timerList/timerList';
import {
	CHAOS_GATE,
	DAILY_ISLAND,
	FIELD_BOSS,
	LOWEN,
	OCEAN_ACT,
	PHANTOM_SHIP,
} from '@/constants/timer';
import { useCancelQuery } from '@/hooks/query/useCancelQuery';
import {
	CALENDAR_QUERY_KEY,
	EVENT_QUERY_KEY,
} from '@/hooks/query/useLoaHandsQuery';
import { useHomeRerender } from '@/hooks/useHomeRerender';
import { useTimerNotification } from '@/hooks/useTimerNotification';
import * as Styled from '@/pages/home/home.style';

const Home = () => {
	const { isMidnight, isSix } = useHomeRerender();
	const queryKey = [
		EVENT_QUERY_KEY,
		[CALENDAR_QUERY_KEY, isMidnight.getDate()],
	];
	const yoil = isMidnight.getDay();
	const isWeek = 6 > yoil && yoil > 0;
	const notification = useTimerNotification();
	useCancelQuery(queryKey);

	return (
		<Styled.Home>
			<Styled.Notification
				buttonType="black"
				onClick={notification.requestPermission}
			>
				<Text>타이머 알림 활성화</Text>
			</Styled.Notification>
			<Styled.Section
				title={<Styled.SectionTitle>진행중인 이벤트</Styled.SectionTitle>}
			>
				<AsyncBoundary
					suspenseFallback={<LoadingSpinner />}
					errorFallback={ErrorFallback}
				>
					<EventList />
				</AsyncBoundary>
			</Styled.Section>
			<Styled.Section
				title={
					<Styled.SectionTitle>
						오늘의 캘린더섬
						<Styled.SectionSmallTitle>
							{isWeek ? '11:00 ~ 23:00' : '09:00 ~ 23:00'}
						</Styled.SectionSmallTitle>
					</Styled.SectionTitle>
				}
			>
				<AsyncBoundary
					suspenseFallback={<LoadingSpinner />}
					errorFallback={ErrorFallback}
				>
					<Calendar
						queryKey={isMidnight.getDate()}
						isMidnight={isMidnight}
						notification={notification.activeNotification}
						isWeek={isWeek}
					/>
				</AsyncBoundary>
			</Styled.Section>
			<Styled.Section
				title={<Styled.SectionTitle>오늘의 모험섬</Styled.SectionTitle>}
			>
				<TimerList
					data={DAILY_ISLAND}
					notification={notification.activeNotification}
				/>
			</Styled.Section>
			<Styled.Section
				title={<Styled.SectionTitle>오늘의 필드보스</Styled.SectionTitle>}
			>
				<TimerList
					data={FIELD_BOSS[isSix.getDay()]}
					rerenderKey={isSix}
					notification={notification.activeNotification}
				/>
			</Styled.Section>
			<Styled.Section
				title={<Styled.SectionTitle>오늘의 카오스 게이트</Styled.SectionTitle>}
			>
				<TimerList
					data={CHAOS_GATE[isSix.getDay()]}
					rerenderKey={isSix}
					notification={notification.activeNotification}
				/>
			</Styled.Section>
			<Styled.Section
				title={<Styled.SectionTitle>오늘의 유령선</Styled.SectionTitle>}
			>
				<TimerList
					data={PHANTOM_SHIP[isSix.getDay()]}
					rerenderKey={isSix}
					notification={notification.activeNotification}
				/>
			</Styled.Section>
			<Styled.Section
				title={<Styled.SectionTitle>오늘의 항해</Styled.SectionTitle>}
			>
				<TimerList
					data={OCEAN_ACT[isSix.getDay()]}
					rerenderKey={isSix}
					notification={notification.activeNotification}
				/>
			</Styled.Section>
			<Styled.Section
				title={<Styled.SectionTitle>오늘의 로웬</Styled.SectionTitle>}
			>
				<TimerList
					data={LOWEN[isSix.getDay()]}
					notification={notification.activeNotification}
					rerenderKey={isSix}
				/>
			</Styled.Section>
		</Styled.Home>
	);
};

export default Home;
