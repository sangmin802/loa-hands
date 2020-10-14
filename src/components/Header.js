import React from 'react';
import '../css/Header.css';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

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
      <div className="innerHeader">
        <div className="logo">
          <Link to="/" className="rem17">Loa Hands</Link>
        </div>
        <form onSubmit={userOnSubmit} className="searchForm">
          <input type="text" name="searchedUser"/>
          <input type="submit" value="찾기"/>
        </form>
      </div>
    </div>
  )
}

export default Header;