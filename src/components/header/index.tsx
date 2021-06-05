import React, { useCallback, useRef } from "react";
import Lodash from "lodash";
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
      <div className="inner-header">
        <div
          className="logo"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/img/all.png')`,
          }}
          onClick={setHomeData}
        />
        <form onSubmit={onSubmitHandler} className="search-form">
          <input
            type="text"
            name="searchedUser"
            ref={textInput}
            autoComplete="off"
          />
          <input type="submit" value="검색" />
        </form>
      </div>
    </div>
  );
};

export default React.memo(Header, (left, right) => Lodash.isEqual(left, right));
