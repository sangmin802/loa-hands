import API from "api/api";
import { useQuery } from "react-query";

export function useEvent() {
  const { data: eventData } = useQuery(
    "fetchEventData",
    () => API.getEventData(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return eventData;
}
