import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useDateOver(reset) {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkNight = function () {
      const hour = new Date().getHours();
      const min = new Date().getMinutes();
      const sec = new Date().getSeconds();

      if (hour === 0 && min === 0 && sec === 0) {
        dispatch(reset());
      }
    };
    const checkInterval = setInterval(checkNight, 1000);
    return () => {
      clearInterval(checkInterval);
    };
  }, [dispatch, reset]);
}
