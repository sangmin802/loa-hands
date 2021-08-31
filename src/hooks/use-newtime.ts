import { useState } from "react";

export function useNewTime() {
  const [, setTime] = useState(null);

  return { setTime };
}
