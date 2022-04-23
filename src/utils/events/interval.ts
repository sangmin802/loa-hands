export function interval(t: number, cb: (...args: any[]) => void) {
	const intervalArr: NodeJS.Timeout[] = [];

	function start(args?: any) {
		cb(args);
		const interval = setInterval(() => cb(args), t * 1000);
		intervalArr.push(interval);
	}

	function cancel() {
		intervalArr.forEach((interval: NodeJS.Timeout) => clearInterval(interval));
	}

	return { start, cancel };
}
