import { useEffect } from "react";

const RemoveScrollHook = dialog => {
  useEffect(() => {
    const body = document.querySelector("body");
    const top = window.pageYOffset;
    if (dialog) {
      const style = `
        position: fixed; 
        top: -${top}px;
        left: 0px;
        right: 0px;          
      `;
      body.setAttribute("style", style);
    }
    return () => {
      // dialog가 꺼질 때
      if (dialog) {
        body.setAttribute("style", "");
        window.scrollTo(0, top);
      }
    };
  }, [dialog]);
};

export default RemoveScrollHook;
