import { useQuery } from 'react-query';

import { getUserCollection } from '@/api/api';
import CollectionInfo from '@/models/collectionInfo';

export function useUserCollection(name: string, member: string[]) {
	const { data: userColection } = useQuery(
		`userCollection-${name}`,
		() => getUserCollection(member),
		{
			refetchOnWindowFocus: false,
		},
	);

	return userColection as CollectionInfo;
}
