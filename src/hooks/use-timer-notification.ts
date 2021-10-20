import { useCallback, useMemo } from "react";
import { NotificationHandler } from "utils/events/notification";

export function useTimerNotification() {
  const createNotification = useCallback(works => {
    const [start, ready] = works.reduce(
      (prev, cur) => {
        cur.type === "START" ? prev[0].push(cur) : prev[1].push(cur);
        return prev;
      },
      [[], []]
    );

    const startBody = start.length
      ? `\n시작 컨텐츠\n[${start[0].name}] 등 ${start.length}개`
      : "";
    const readyBody = ready.length
      ? `\n준비 컨텐츠\n[${ready[0].name}] 등 ${ready.length}개`
      : "";

    return {
      title: `Loa-Hands 알림`,
      option: {
        body: startBody + readyBody,
      },
    };
  }, []);

  const notification = useMemo(
    () => new NotificationHandler(createNotification),
    [createNotification]
  );

  return notification;
}
