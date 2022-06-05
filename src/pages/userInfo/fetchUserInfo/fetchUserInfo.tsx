import React from 'react';
import { useParams } from 'react-router-dom';

import AsyncBoundary from '@/components/common/asyncBoundary/asyncBoundary';
import ErrorFallback from '@/components/common/errorFallback/errorFallback';
import SearchLoading from '@/components/userInfo/searchLoading/searchLoading';
import { useCancelQuery } from '@/hooks/query/useCancelQuery';
import {
	USER_COLLECTION_QUERY_KEY,
	USER_QUERY_KEY,
} from '@/hooks/query/useLoaHandsQuery';
import UserInfo from '@/pages/userInfo/userInfo';

const FetchUserInfo = () => {
	const { name } = useParams();
	useCancelQuery([
		[USER_QUERY_KEY, name],
		[USER_COLLECTION_QUERY_KEY, name],
	]);

	return (
		<AsyncBoundary
			errorFallback={ErrorFallback}
			suspenseFallback={<SearchLoading />}
			keys={name}
		>
			<UserInfo name={name as string} />
		</AsyncBoundary>
	);
};

export default React.memo(FetchUserInfo);
