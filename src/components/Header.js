import React from 'react';
import {useHistory} from 'react-router-dom';

function Header(redux){
  const history = useHistory();
  const {getUserData} = redux;

  const userOnSubmit = (e) => {
    e.preventDefault();
    const {target : {searchedUser : {value}}} = e;
    getUserData(value, history)
  }

  return(
    <div className="header">
      <form onSubmit={userOnSubmit}>
        <input type="text" name="searchedUser"/>
        <input type="submit" value="검색"/>
      </form>
    </div>
  )
}

export default Header;