import { getUserCollection } from "api/api";
import CollectionInfo from "models/collectionInfo";
import { useQuery } from "react-query";

export function useUserCollection(queryKey: string[], member: string[]) {
  const { data: userColection } = useQuery(
    queryKey,
    () => getUserCollection(member),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    }
  );

  return userColection as CollectionInfo;
}
