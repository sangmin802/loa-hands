import React from 'react';
import Tab from './tab/index';

import './index.css'

const Index = ({
  tabClass,
  arr,
} : {
  tabClass : string
  arr : (string | JSX.Element)[]
}) => {
  return (
    <div className={`${tabClass}TabWrap`}>
      {arr.map((tab, index) => {
        return <Tab key={`${tabClass}Tab${index}`} tabName={tab} />
      })}
    </div>
  )
}

export default React.memo(Index, () => true);