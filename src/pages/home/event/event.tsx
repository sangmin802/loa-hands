import React from "react";
import { useEvent } from "hooks/use-event";
import * as Styled from "./event.style";

interface EventProps {
  queryKey: string;
}

function Event({ queryKey }: EventProps) {
  const eventData = useEvent(queryKey);

  return <Styled.EventList data={eventData.events} item={Styled.EventItem} />;
}

export default React.memo(Event);
