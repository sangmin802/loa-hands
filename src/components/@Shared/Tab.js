import React from 'react';

function Tab({index, tab, tabDispatcher, tabName}){
  let target = null;
  if(index===tab) target = "tabTarget"
  return (
    <div className={`userInfoBottomSubTab textCenter ${target}`}
      onClick={() => {
        tabDispatcher(index)
      }}
    >
      {tabName}
    </div>
  )
}

export default Tab;