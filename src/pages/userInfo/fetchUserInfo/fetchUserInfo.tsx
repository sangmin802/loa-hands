import React from 'react';
import { useParams } from 'react-router-dom';

import AsyncBoundary from '@/components/common/asyncBoundary/asyncBoundary';
import ErrorFallback from '@/components/common/errorFallback/errorFallback';
import { useCancelQuery } from '@/hooks/useCancelQuery';
import SearchLoading from '@/pages/userInfo/searchLoading/searchLoading';
import UserInfo from '@/pages/userInfo/userInfo';

function FetchUserInfo() {
	const { name } = useParams();
	useCancelQuery([`userInfo-${name}`, `userCollection-${name}`]);

	return (
		<AsyncBoundary
			errorFallback={ErrorFallback}
			suspenseFallback={<SearchLoading />}
			keys={name}
		>
			<UserInfo name={name as string} />
		</AsyncBoundary>
	);
}

export default React.memo(FetchUserInfo);
