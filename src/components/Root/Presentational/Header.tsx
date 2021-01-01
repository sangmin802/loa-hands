import React, { useRef } from 'react';
import '../../../css/Header.css';
import _ from '../../../Utility';

// 타입
import HomeData from '../../../models/homeData';

interface Props {
  homeData : HomeData
  getUserData<T>(p1 : string, p2 : T) : void
  setHomeData<T>(p1 : T) : void
}

const Header : React.FC<Props> = ({
  homeData,
  getUserData,
  setHomeData,
}) => {
  let textInput = useRef(null);
  const {history} = _.GetHooks();
  const userOnSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.target[0].value;
    getUserData<typeof history>(value, history)
    textInput.current.value = null;
  }
  return(
    <div className="header">
      <div className="innerHeader">
        <div className="logo"
          onClick={() => {
            if(!homeData) return setHomeData<typeof history>(history);
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

export default React.memo(Header, () => true);