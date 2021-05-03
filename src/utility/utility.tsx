export function addZero(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}

export function arrayReducer(arr, type) {
  return arr.reduce(
    (prev, cur) => {
      if (cur.type.includes(type)) {
        prev[0].push(cur);
      } else {
        prev[1].push(cur);
      }
      return prev;
    },
    [[], []]
  );
}
