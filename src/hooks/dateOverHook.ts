import { useEffect } from "react";

const DateOver = setHomeData => {
  useEffect(() => {
    const checkNight = function () {
      const hour = new Date().getHours();
      const min = new Date().getMinutes();
      const sec = new Date().getSeconds();
      if (hour === 0 && min === 0 && sec === 0) {
        setHomeData();
      }
    };
    const checkInterval = setInterval(checkNight, 1000);
    return () => {
      clearInterval(checkInterval);
    };
  }, []);
};

export default DateOver;
