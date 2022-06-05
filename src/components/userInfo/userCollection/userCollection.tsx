import React, { useMemo } from 'react';

import FlexHalf from '@/components/common/flexHalf/flexHalf';
import List from '@/components/common/list/list';
import InfoItem from '@/components/userInfo/infoItem/infoItem';
import { useUserCollectionQuery } from '@/hooks/query/useLoaHandsQuery';
import { useNavigation } from '@/hooks/useNavigation';
import CollectionInfo from '@/models/collectionInfo';
import { reducePerType } from '@/utils/util';

import * as Styled from './userCollection.style';

interface IUserColletion {
	member: string[];
	queryKey: string;
}

const navList = ['', '', '', '', '', '', '', ''];

const UserCollection = ({ queryKey, member }: IUserColletion) => {
	const { data } = useUserCollectionQuery(queryKey, member);
	const userCollection = data as CollectionInfo;
	const arr = useMemo(
		() =>
			userCollection.collectionDetail.map((data) => reducePerType(data, 'get')),
		[userCollection],
	);

	const { nav, handleNavDelegation } = useNavigation();

	// mini={userCollection.collectionMini[i]}
	return (
		<>
			<Styled.Navigation onClick={handleNavDelegation}>
				{navList.map((name, i) => (
					<Styled.NavButton
						key={i}
						data-id={i}
						selected={nav === i}
					>
						{name}
					</Styled.NavButton>
				))}
			</Styled.Navigation>
			<Styled.NAVContent>
				{arr.map((data, i) =>
					i === nav ? (
						<FlexHalf
							left={
								<List
									data={data[0]}
									item={InfoItem}
								/>
							}
							right={
								<List
									data={data[1]}
									item={InfoItem}
								/>
							}
							key={i}
						/>
					) : null,
				)}
			</Styled.NAVContent>
		</>
	);
};

export default React.memo(UserCollection);
