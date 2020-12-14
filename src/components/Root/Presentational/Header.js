import React, { useRef } from 'react';
import '../../../css/Header.css';
import _ from '../../../Utility.js';

function Header({
  homeData, 
  getUserData, 
  setHomeData
}){
  let textInput = useRef(null);
  const {history} = _.GetHooks();
  const userOnSubmit = (e) => {
    e.preventDefault();
    let {target : {searchedUser : {value}}} = e;
    getUserData(value, history)
    textInput.current.value = null;
  }
  return(
    <div className="header">
      <div className="innerHeader">
        <div className="logo"
          onClick={() => {
            if(!homeData) return setHomeData(history);
            history.replace(`/`);
          }}
        >
        </div>
        <form onSubmit={userOnSubmit} className="searchForm">
          <input type="text" name="searchedUser" ref={textInput}/>
          <input type="submit" className="rem1" value="검색"/>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Header, (prev, next) => true);