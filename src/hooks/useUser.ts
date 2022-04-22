import { useQuery } from 'react-query';

import { getUserData } from '@/api/api';

export function useUser(name: string) {
	const { data } = useQuery(`userInfo-${name}`, () => getUserData(name), {
		refetchOnWindowFocus: false,
	});
	return data;
}
