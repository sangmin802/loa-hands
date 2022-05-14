import { useQuery } from 'react-query';

import CollectionInfo from '@/models/collectionInfo';
import { getUserCollection } from '@/service/loaHands';

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
