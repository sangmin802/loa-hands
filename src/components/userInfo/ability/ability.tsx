import React, { useMemo } from 'react';

import FlexHalf from '@/components/common/flexHalf/flexHalf';
import List from '@/components/common/list/list';
import * as Styled from '@/components/userInfo/ability/ability.style';
import Characteristic from '@/components/userInfo/characteristic/characteristic';
import HTMLItem from '@/components/userInfo/htmlItem/htmlItem';
import InfoItem from '@/components/userInfo/infoItem/infoItem';
import { useNavigation } from '@/hooks/useNavigation';
import UserInfo from '@/models/userInfo';
import { reducePerType } from '@/utils/util';

interface IAbility {
	userData: UserInfo;
}

const navList = ['착용 아이템', '착용 아바타', '각인·특성', '보석'];

const Ability = ({ userData }: IAbility) => {
	const [
		[equipLeft, equipRight],
		[avatarLeft, avatarRight],
		[buff, debuff],
		[basic, battle],
		[gemLeft, gemRight],
	] = useMemo(() => {
		const {
			characteristicInfo,
			equipInfo: { equipment, avatar, gem },
			engrave,
		} = userData.abilityInfo;
		const { battle, basic } = characteristicInfo;
		const sortedEngrave = [...engrave.values()]
			.filter((e) => e.size >= 5)
			.sort((a, b) => {
				if (a.size > b.size) return -1;
				return 0;
			});

		return [
			reducePerType(Object.values(equipment), 'equip'),
			reducePerType(Object.values(avatar), 'inner'),
			reducePerType(sortedEngrave, 'buff'),
			[battle, basic],
			reducePerType(Object.values(gem)),
		];
	}, [userData]);

	const { nav, handleNavDelegation } = useNavigation();

	return (
		<>
			<Styled.Navigation onClick={handleNavDelegation}>
				{navList.map((name, i) => (
					<Styled.NavButton
						selected={nav === i}
						data-id={i}
						key={i}
					>
						{name}
					</Styled.NavButton>
				))}
			</Styled.Navigation>
			<Styled.NAVContent>
				{nav === 0 && (
					<FlexHalf
						left={
							<List
								data={equipLeft}
								item={InfoItem}
							/>
						}
						right={
							<List
								data={equipRight}
								item={InfoItem}
							/>
						}
					/>
				)}
				{nav === 1 && (
					<FlexHalf
						left={
							<List
								data={avatarLeft}
								item={InfoItem}
							/>
						}
						right={
							<List
								data={avatarRight}
								item={InfoItem}
							/>
						}
					/>
				)}
				{nav === 2 && (
					<>
						<FlexHalf
							left={
								<List
									data={buff}
									item={HTMLItem}
								/>
							}
							right={
								<List
									data={debuff}
									item={HTMLItem}
								/>
							}
						/>
						<List
							data={[basic, battle]}
							item={Characteristic}
						/>
					</>
				)}
				{nav === 3 && (
					<FlexHalf
						left={
							<List
								data={gemLeft}
								item={InfoItem}
							/>
						}
						right={
							<List
								data={gemRight}
								item={InfoItem}
							/>
						}
					/>
				)}
			</Styled.NAVContent>
		</>
	);
};

export default React.memo(Ability);
