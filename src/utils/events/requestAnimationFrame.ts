export function animationFrame(t: number, cb: (...args: any[]) => void) {
  let RAF: number | null = null;

  function start(args?: any) {
    cb(args);
    const decorator = (lastTime: number) => {
      const curTime = new Date().getTime();
      const diff = curTime - lastTime;
      if (diff > t) {
        cb(args);
        lastTime = curTime;
      }
      RAF = requestAnimationFrame(() => decorator(lastTime));
    };

    RAF = requestAnimationFrame(() => decorator(new Date().getTime()));
  }

  function cancel() {
    RAF && cancelAnimationFrame(RAF);
  }

  return { start, cancel };
}
