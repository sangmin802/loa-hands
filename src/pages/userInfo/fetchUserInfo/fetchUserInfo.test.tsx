import { ReactElement } from 'react';
import { Route, useNavigate } from 'react-router-dom';

import ErrorBoundary from '@/components/common/errorBoundary/errorBoundary';
import ErrorFallback from '@/components/common/errorFallback/errorFallback';
import { USER_DATA } from '@/constants/_backup';
import { useUser } from '@/hooks/query/useUser';
import UserInfo from '@/pages/userInfo/fetchUserInfo/fetchUserInfo';
import { fireEvent, render } from '@/utils/test';

// 정상적인 userInfo 렌더링
// error, loading 은 상위컴포넌트에서 테스트

const match = {
	params: {
		name: '모여요꿈동산',
	},
};

const useRenderWithRouter = (component: ReactElement, route: string) => {
	const navigate = useNavigate();

	if (route) navigate(route);

	return (
		<ErrorBoundary
			keys={match.params.name}
			errorFallback={ErrorFallback}
		>
			<Route path="/userInfo/:name">{component}</Route>
		</ErrorBoundary>
	);
};

// 모듈 경로 자체를 mocking 해줘야 함. 그냥 값만 mocking 하면 하위에서 해당 모듈을 사용하는 경우 다른 상수값으로 import해서 적용 안됨
jest.mock('hooks/use-user', () => ({
	useUser: jest.fn().mockImplementation(() => ({})),
}));

window.alert = jest.fn();
window.scrollTo = jest.fn();

describe('UserInfo', () => {
	it('useUser name 변수 확인', async () => {
		render(useRenderWithRouter(<UserInfo />, '/userInfo/모여요꿈동산'));

		expect(useUser as jest.Mock).toBeCalledWith('모여요꿈동산');
	});

	describe('data fetched', () => {
		beforeEach(() => {
			(useUser as jest.Mock).mockImplementationOnce(() => USER_DATA);
		});

		it('name변수에 맞는 유저정보 fetched', () => {
			const { getByTestId } = render(
				useRenderWithRouter(<UserInfo />, '/userInfo/모여요꿈동산'),
			);

			expect(getByTestId('모여요꿈동산')).toBeTruthy();
		});
	});

	describe('user event', () => {
		beforeEach(() => {
			(useUser as jest.Mock).mockImplementation(() => USER_DATA);
		});

		it('네비게이션 변경', () => {
			const { getByTestId } = render(
				useRenderWithRouter(<UserInfo />, '/userInfo/모여요꿈동산'),
			);

			expect(getByTestId('main-content-0')).toBeTruthy();

			fireEvent.click(getByTestId('main-nav-1'));

			expect(getByTestId('main-content-0').dataset.show).toBe('false');
			expect(getByTestId('main-content-1').dataset.show).toBe('true');
		});

		it('상세보기 다이얼로그 활성화', () => {
			const { getAllByTestId, queryByTestId, getByTestId } = render(
				useRenderWithRouter(<UserInfo />, '/userInfo/모여요꿈동산'),
			);

			expect(queryByTestId('dialog-content')).toBe(null);

			fireEvent.click(getAllByTestId('list-item')[0]);

			expect(getByTestId('dialog-content')).toBeTruthy();
		});

		it('원정대 유저 팝업 활성화 및 검색 실행', () => {
			const { queryByTestId, getByTestId, getByText, debug } = render(
				useRenderWithRouter(<UserInfo />, '/userInfo/모여요꿈동산'),
			);

			expect(queryByTestId('dialog-content')).toBe(null);

			fireEvent.click(getByTestId('expedition-button'));

			expect(getByTestId('dialog-content')).toBeTruthy();
			expect(getByText(/워로드는뒤로점프/gi)).toBeTruthy();

			fireEvent.click(getByText(/워로드는뒤로점프/gi));

			expect(useUser as jest.Mock).toBeCalledWith('워로드는뒤로점프');
			expect(queryByTestId('dialog-content')).toBe(null);
		});
	});
});
