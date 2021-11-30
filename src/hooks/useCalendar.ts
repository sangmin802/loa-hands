import { getCalendarData } from "api/api";
import CalendarData from "models/calendarData";
import { useQuery } from "react-query";

export function useCalendar(queryKey: (number | string)[]): CalendarData {
  const { data: calendarData } = useQuery(queryKey, () => getCalendarData(), {
    refetchOnWindowFocus: false,
  });

  return calendarData as CalendarData;
}
