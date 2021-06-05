import React from "react";
import ServerChar from "../char/index";

const Index = ({ wrap, setUserData }) => {
  return (
    <div className="user-expedition">
      <div className="user-expedition-server">{wrap.server}</div>
      <div className="user-expedition-char-wrap">
        {wrap.charList.map((char, charIndex) => {
          return (
            <ServerChar
              key={`userExpeditionChar${charIndex}`}
              setUserData={setUserData}
              char={char}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
