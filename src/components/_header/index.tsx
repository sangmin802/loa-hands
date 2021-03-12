import React, { useCallback, useRef } from "react";
import "./index.css";
import HomeDataHooks from "hooks/homeDataHooks";
import UserDataHooks from "hooks/userDataHooks";

const Index = () => {
  let textInput = useRef(null);

  const { homeData, setHomeData } = HomeDataHooks();
  const { setUserData } = UserDataHooks();

  const userOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.target[0].value;
    setUserData(value);
    textInput.current.value = null;
  };

  const goHome = useCallback(() => {
    setHomeData(homeData);
  }, [homeData, setHomeData]);

  return (
    <div className="header">
      <div className="innerHeader">
        <div className="logo" onClick={goHome}></div>
        <form onSubmit={userOnSubmit} className="searchForm">
          <input type="text" name="searchedUser" ref={textInput} />
          <input type="submit" className="rem1" value="검색" />
        </form>
      </div>
    </div>
  );
};

export default React.memo(Index, () => true);
