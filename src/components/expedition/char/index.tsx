import React, { useCallback } from "react";

const Index = ({ setUserData, char }) => {
  const setUserDataEvent = useCallback(() => {
    setUserData(char.name);
  }, [char.name, setUserData]);

  return (
    <div className="userExpeditionChar overflowDot" onClick={setUserDataEvent}>
      {char.lv} {char.name}
    </div>
  );
};

export default Index;
