import { useEffect } from 'react';
import { QueryKey, useQueryClient } from 'react-query';

export const useCancelQuery = (queryKey: QueryKey[]) => {
	const queryClient = useQueryClient();

	useEffect(() => {
		return () => {
			queryKey.forEach((key) => {
				// key의 query 중단
				if (queryClient.isFetching(key)) queryClient.cancelQueries(key);

				// key에 대한 캐싱된 값 초기화
				if (!queryClient.getQueryData(key))
					queryClient.resetQueries(key, { exact: true });
			});
		};
	}, [queryClient, queryKey]);
};
