import React, { useMemo } from 'react';

import FlexHalf from '@/components/common/flexHalf/flexHalf';
import List from '@/components/common/list/list';
import { useNavigation } from '@/hooks/useNavigation';
import UserInfo from '@/models/userInfo';
import InfoItem from '@/pages/userInfo/infoItem/infoItem';
import * as Styled from '@/pages/userInfo/skill/skill.style';
import { reducePerType } from '@/utils/util';

interface SkillProps {
	userData: UserInfo;
}

const navList = ['전투스킬', '생활스킬'];

function Skill({ userData }: SkillProps) {
	const [[skillLeft, skillRight], [lifeLeft, lifeRight]] = useMemo(() => {
		const { battleSkill, lifeSkill } = userData.skillInfo;

		return [
			reducePerType(battleSkill.skills, 'leftSkill'),
			reducePerType(lifeSkill, 'leftSkill'),
		];
	}, [userData]);

	const { nav, handleNavDelegation } = useNavigation();

	return (
		<>
			<Styled.Navigation onClick={handleNavDelegation}>
				{navList.map((name, i) => (
					<Styled.NavButton selected={nav === i} data-id={i} key={i}>
						{name}
					</Styled.NavButton>
				))}
			</Styled.Navigation>
			<Styled.NAVContent>
				{nav === 0 && (
					<FlexHalf
						left={<List data={skillLeft} item={InfoItem} />}
						right={<List data={skillRight} item={InfoItem} />}
					/>
				)}
				{nav === 1 && (
					<FlexHalf
						left={<List data={lifeLeft} item={InfoItem} />}
						right={<List data={lifeRight} item={InfoItem} />}
					/>
				)}
			</Styled.NAVContent>
		</>
	);
}

export default React.memo(Skill);
