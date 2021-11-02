import { useQuery } from "react-query";
import { getUserData } from "api/api";

export function useUser(queryKey: string[]) {
  const query = useQuery(queryKey, () => getUserData(queryKey[1]), {
    refetchOnWindowFocus: false,
    suspense: false,
  });

  return query;
}
