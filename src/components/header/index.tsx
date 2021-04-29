import React, { useCallback, useRef } from "react";
import _ from "utility/utility";
import "./index.scss";

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
        <div className="logo" onClick={setHomeData} />
        <form onSubmit={onSubmitHandler} className="searchForm">
          <input
            type="text"
            name="searchedUser"
            ref={textInput}
            autoComplete="off"
          />
          <input type="submit" className="rem1" value="검색" />
        </form>
      </div>
    </div>
  );
};

export default React.memo(Header, (left, right) => _.compareObj(left, right));
