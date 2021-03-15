import { useEffect } from "react";

const RemoveScrollHook = dialog => {
  useEffect(() => {
    // body에 overflow-y hidden 주는방식은 ios에서 적용 안됨
    // 아니 근데, 아래의 방법도 fixed 버그때문에 안됨;
    // safari 리얼 정뚝떨;
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
