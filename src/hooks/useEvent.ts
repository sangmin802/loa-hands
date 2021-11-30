import { getEventData } from "api/api";
import EventData from "models/eventData";
import { useQuery } from "react-query";

export function useEvent(queryKey: string): EventData {
  const { data: eventData } = useQuery(queryKey, () => getEventData(), {
    refetchOnWindowFocus: false,
  });

  return eventData as EventData;
}
