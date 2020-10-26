import React, { useRef } from 'react';
import '../css/Header.css';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Header(redux){
  const history = useHistory();
  const {getUserData} = redux;
  let textInput = useRef(null);
  
  const userOnSubmit = (e) => {
    e.preventDefault();
    let {target : {searchedUser : {value}}} = e;
    getUserData(value, history)
    textInput.current.value = null;
  }
  return(
    <div className="header">
      <div className="innerHeader">
        <div className="logo">
          <Link to="/" className="rem17"></Link>
        </div>
        <form onSubmit={userOnSubmit} className="searchForm">
          <input type="text" className="rem1" name="searchedUser" ref={textInput}/>
          <input type="submit" className="rem1" value="검색"/>
        </form>
      </div>
    </div>
  )
}

export default Header;