import React from 'react';

const Tab = ({
  tabName,
} : {
  tabName : string | JSX.Element
}) => {
  return (
    <div className={`tab textCenter`}>{tabName}</div>
  )
}

export default React.memo(Tab, () => true);