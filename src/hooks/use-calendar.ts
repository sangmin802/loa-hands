import { getCalendarData } from "api/api";
import { useQuery } from "react-query";

export function useCalendar() {
  const { data: calendarData } = useQuery(
    "fetchCalendarData",
    () => getCalendarData(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return calendarData;
}
