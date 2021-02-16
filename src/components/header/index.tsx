import React, { useRef } from 'react';
import './index.css';
import History from 'hooks/history'
import _ from 'utility'

import {Header} from 'store/controller/dispatchers'
import {Selector} from 'store/controller/selector'

// 타입

const Index = () => {
  let textInput = useRef(null);
  const {getUserData, setHomeData} = Header();
  const history = History();
  const {homeData} = Selector(['homeData'], (left, right) => {
    if(_.compareObj(left.homeData, right.homeData)) return true;
    return false;
  })

  const userOnSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.target[0].value;
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

export default React.memo(Index, () => true);