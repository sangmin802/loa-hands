import React from 'react';

function UserExpedition({
  history,
  getUserData,
  expeditionUserWrap,
  expeditionPopToggle,
  expeditionPop
}){

  let displayPop = null;
  if(expeditionPop) displayPop = 'displayBlock';

  return(
    <div className={`searchedUserExpedition zIndex11 ${displayPop}`}>
      <div className="searchedUserExpeditionClose"
        onClick={() => {
          expeditionPopToggle(false);
        }}
      >
        닫기
      </div>
      {expeditionUserWrap.map((wrap, index) => {
        return <ExpeditionServer 
                  key={`userExpedition${index}`}
                  wrap={wrap}
                  getUserData={getUserData}
                  history={history}
               />
      })}
    </div>    
  )
}

function ExpeditionServer({wrap, getUserData, history}){
  return(
    <div className="userExpedition">
      <div className="userExpeditionServer rem13">
        {wrap.server}
      </div>
      <div className="userExpeditionCharWrap">
        {wrap.charList.map((char, charIndex) => {
          return <ServerChar 
                    key={`userExpeditionChar${charIndex}`}
                    getUserData={getUserData}
                    char={char}
                    history={history}
                 />
        })}
      </div>
    </div>
  )
}

function ServerChar({getUserData, char, history}){
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

export default UserExpedition;