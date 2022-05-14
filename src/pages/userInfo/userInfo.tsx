import React, { useCallback } from 'react';

import AsyncBoundary from '@/components/common/asyncBoundary/asyncBoundary';
import ErrorFallback from '@/components/common/errorFallback/errorFallback';
import FlexHalf from '@/components/common/flexHalf/flexHalf';
import LoadingSpinner from '@/components/common/loadingSpinner/loadingSpinner';
import { useModal } from '@/components/common/modal/modalManager';
import Text from '@/components/common/text/text';
import Ability from '@/components/userInfo/ability/ability';
import Skill from '@/components/userInfo/skill/skill';
import UserCollection from '@/components/userInfo/userCollection/userCollection';
import { useUserQuery } from '@/hooks/query/useLoaHandsQuery';
import { useNavigation } from '@/hooks/useNavigation';
import UserInfoModel from '@/models/userInfo';

import * as Styled from './userInfo.style';

export interface IUserInfo {
	name: string;
}

const navList = ['능력치', '스킬', '수집형포인트'];

const UserInfo = ({ name }: IUserInfo) => {
	const { data } = useUserQuery(name);
	const userData = data as UserInfoModel;

	const { nav, handleNavDelegation } = useNavigation([name]);
	const { setModal } = useModal();
	const { basicInfo: BI, expeditionInfo: EI } = userData;

	const handlModal = useCallback(() => {
		setModal?.({
			type: 'EXPEDITION',
			data: userData,
		});
	}, [userData, setModal]);

	return (
		<Styled.UserInfo data-testid={EI.name}>
			<Styled.Top>
				<Styled.ExpeditionButton
					buttonType="gray"
					onClick={handlModal}
				>
					<Text>원정대</Text>
				</Styled.ExpeditionButton>
				<Styled.BasicInfoLabel title={<Styled.Label>클래스</Styled.Label>}>
					<Styled.ClassThumbnail src={BI.classSrc} />
					<Text>{BI.className}</Text>
				</Styled.BasicInfoLabel>
				<Styled.BasicInfoLabel title={<Styled.Label>이름</Styled.Label>}>
					<Text>
						{EI.Lv} {EI.name}
					</Text>
				</Styled.BasicInfoLabel>
				<Styled.BasicInfoLabel title={<Styled.Label>원정대 레벨</Styled.Label>}>
					<Text size="0.9">
						{EI.server} Lv {BI.expeditionLv}
					</Text>
				</Styled.BasicInfoLabel>
				<FlexHalf
					left={
						<Styled.BasicInfoLabel
							title={<Styled.Label>현재 아이템 레벨</Styled.Label>}
						>
							<Text size="0.9">
								{BI.curBigLv} <small>{BI.curSmallLv}</small>
							</Text>
						</Styled.BasicInfoLabel>
					}
					right={
						<Styled.BasicInfoLabel
							title={<Styled.Label>달성 아이템 레벨</Styled.Label>}
						>
							<Text size="0.9">
								{BI.reachBigLv} <small>{BI.reachSmallLv}</small>
							</Text>
						</Styled.BasicInfoLabel>
					}
				/>
				<FlexHalf
					left={
						<Styled.BasicInfoLabel title={<Styled.Label>영지</Styled.Label>}>
							<Text size="0.9">{BI.garden}</Text>
						</Styled.BasicInfoLabel>
					}
					right={
						<Styled.BasicInfoLabel title={<Styled.Label>PVP</Styled.Label>}>
							<Text size="0.9">{BI.pvp}</Text>
						</Styled.BasicInfoLabel>
					}
				/>
				<FlexHalf
					left={
						<Styled.BasicInfoLabel title={<Styled.Label>칭호</Styled.Label>}>
							<Text size="0.9">{BI.title}</Text>
						</Styled.BasicInfoLabel>
					}
					right={
						<Styled.BasicInfoLabel title={<Styled.Label>길드</Styled.Label>}>
							<Text size="0.9">{BI.guild}</Text>
						</Styled.BasicInfoLabel>
					}
				/>
			</Styled.Top>
			<Styled.Bottom>
				<Styled.Navigation onClick={handleNavDelegation}>
					{navList.map((name, i) => (
						<Styled.NAVButton
							data-id={i}
							key={i}
							selected={nav === i}
						>
							{name}
						</Styled.NAVButton>
					))}
				</Styled.Navigation>
				<Styled.NAVContent data-testid="content">
					{nav === 0 && <Ability userData={userData} />}
					{nav === 1 && <Skill userData={userData} />}
					{nav === 2 && (
						<AsyncBoundary
							suspenseFallback={<LoadingSpinner />}
							errorFallback={ErrorFallback}
							keys={name}
						>
							<UserCollection
								queryKey={name}
								member={userData.memberArr}
							/>
						</AsyncBoundary>
					)}
				</Styled.NAVContent>
			</Styled.Bottom>
		</Styled.UserInfo>
	);
};

export default React.memo(UserInfo);
