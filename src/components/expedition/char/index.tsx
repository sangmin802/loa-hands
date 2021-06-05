import React, { useCallback } from "react";

const Index = ({ setUserData, char }) => {
  const setUserDataEvent = useCallback(() => {
    setUserData(char.name);
  }, [char.name, setUserData]);

  return (
    <div
      className="user-expedition-char overflow-dot"
      onClick={setUserDataEvent}
    >
      {char.lv} {char.name}
    </div>
  );
};

export default Index;
