import React from 'react';
import _ from '../../Utility.js';

function Tab({
  index, 
  tab, 
  tabDispatcher, 
  tabName
}){
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

export default React.memo(Tab, (prev, next) => {
  if(prev.tab!==next.tab) return false;
  if(prev.tabName!==next.tabName) return false;
  return true;
});