import React, { useCallback, useRef } from "react";
import "./index.css";

const Header = ({ setHomeData, setUserData }) => {
  const textInput = useRef(null);
  const onSubmitHandler = useCallback(
    e => {
      e.preventDefault();
      const value = e.target[0].value;
      setUserData(value);
      textInput.current.value = null;
    },
    [textInput, setUserData]
  );

  return (
    <div className="header">
      <div className="innerHeader">
        <div className="logo" onClick={setHomeData}></div>
        <form onSubmit={onSubmitHandler} className="searchForm">
          <input type="text" name="searchedUser" ref={textInput} />
          <input type="submit" className="rem1" value="검색" />
        </form>
      </div>
    </div>
  );
};

export default React.memo(Header, () => true);