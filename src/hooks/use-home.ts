import API from "api/api";
import { useQuery } from "react-query";

export function useHome() {
  const { data: homeData } = useQuery(
    "fetchHomeData",
    () => API.getHomeData(),
    { suspense: true }
  );

  return homeData;
}
