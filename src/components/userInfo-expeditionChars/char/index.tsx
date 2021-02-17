import React from 'react';
import History from 'hooks/history';
import './index.css';

const Index = ({
  getUserData,
  char
}) => {
  const history = History();

  return(
    <div className="userExpeditionChar rem09 overflowDot"
      onClick={() => {
        getUserData(char.name, history)
      }}
    >
      {char.lv} {char.name}
    </div>
  )
}

export default Index;