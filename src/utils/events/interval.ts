export function interval(t: number, cb: (...args: any[]) => void) {
  const intervalArr: NodeJS.Timeout[] = [];

  function startInterval(args?: any) {
    cb(args);
    const interval = setInterval(() => cb(args), t * 1000);
    intervalArr.push(interval);
    return interval;
  }

  function endInterval() {
    intervalArr.forEach((interval: NodeJS.Timeout) => clearInterval(interval));
  }

  return { startInterval, endInterval };
}
