export function NotificationHandler(createNotification) {
  let notificationWorks = [];
  let timeout = null;

  this.requestPermission = async () => {
    const permission = await Notification.requestPermission(res => res);

    if (permission === "granted")
      return new Notification("알림이 허용되었습니다.");
    if (permission === "default")
      return alert("사용자의 기본 옵션으로 유지됩니다.");
    if (permission === "denied")
      return alert("현재 웹사이트의 모든 알림이 차단되었습니다.");
  };

  this.checkPermission = () => {
    const permission = Notification.permission;
    if (permission === "granted") return true;
    if (permission === "default") return false;
    if (permission === "denied") return false;
  };

  this.removeTimeout = () => clearTimeout(timeout);

  this.activeNotification = data => {
    this.removeTimeout();
    notificationWorks.push(data);
    timeout = setTimeout(() => {
      createNotification(
        notificationWorks,
        Notification,
        this.checkPermission()
      );
      notificationWorks = [];
    }, 300);
  };
}
