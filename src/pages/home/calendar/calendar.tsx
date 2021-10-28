import React, { useMemo } from "react";
import { useCalendar } from "hooks/use-calendar";
import { useTimerNotification } from "hooks/use-timer-notification";
import TimerList from "../timerList/timerList";
import * as Styled from "./calendar.style";

interface CalendarProps {
  queryKey: string | (string | number)[];
  isMidnight: Date;
  notification: ReturnType<typeof useTimerNotification>;
}

function Calendar({ queryKey, isMidnight, notification }: CalendarProps) {
  const yoil = isMidnight.getDay();
  const calendarData = useCalendar(queryKey);
  const isWeek = 6 > yoil && yoil > 0;
  const title = useMemo(() => {
    if (isWeek) return "11:00 ~ 21:00";
    return "09:00 ~ 23:00";
  }, [isWeek]);

  return (
    <Styled.Section title={<Styled.SectionTitle>{title}</Styled.SectionTitle>}>
      <TimerList
        data={
          isWeek ? calendarData.calendar[0] : calendarData.calendar[1] ?? []
        }
        rerenderKey={isMidnight}
        notification={notification}
      />
    </Styled.Section>
  );
}

export default React.memo(Calendar);
