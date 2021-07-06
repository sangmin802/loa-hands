import API from "api/api";
import { useQuery } from "react-query";

export function useCalendar() {
  const { data: calendarData } = useQuery(
    "fetchCalendarData",
    () => API.getCalendarData(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return calendarData;
}
