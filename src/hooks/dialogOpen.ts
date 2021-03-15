import { useEffect } from "react";

const RemoveScrollHook = dialog => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (dialog) {
      body.classList.add("dialogOpen");
    }
    return () => {
      body.classList.remove("dialogOpen");
    };
  }, [dialog]);
};

export default RemoveScrollHook;
