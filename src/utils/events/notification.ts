interface NotificationHandlerProps<T> {
	requestPermission: () => Promise<Notification | undefined>;
	checkPermission: () => boolean | undefined;
	removeTimeout: () => void;
	activeNotification: (P: T) => void;
}

export class NotificationHandler<T> implements NotificationHandlerProps<T> {
	notificationWorks: T[] = [];
	timeout: NodeJS.Timeout | null = null;
	notification: null | Notification = null;
	constructor(
		public createNotification: (T: T[]) => { title: string; option: any },
	) {}

	requestPermission = async () => {
		const permission = await Notification.requestPermission((res) => res);

		if (permission === 'granted')
			return new Notification('알림이 허용되었습니다.');
	};

	checkPermission = () => {
		const permission = Notification.permission;
		if (permission === 'granted') return true;
		if (permission === 'default') return false;
		if (permission === 'denied') return false;
	};

	removeTimeout = () => {
		this.timeout && clearTimeout(this.timeout);
	};

	activeNotification = (data: T) => {
		if (!this.checkPermission()) return;
		this.removeTimeout();
		this.notificationWorks.push(data);
		this.timeout = setTimeout(() => {
			this.notification?.close.bind(this.notification);
			const { title, option } = this.createNotification(this.notificationWorks);
			this.notification = new Notification(title, option);
			this.notificationWorks = [];
		}, 300);
	};
}
