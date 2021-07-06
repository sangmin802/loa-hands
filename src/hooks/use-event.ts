import API from "api/api";
import { useQuery } from "react-query";

export function useEvent() {
  const { data: calendarData } = useQuery(
    "fetchEventData",
    () => API.getEventData(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return calendarData;
}
