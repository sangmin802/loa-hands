import React from 'react';
import './index.css';

const Index = ({
  isLoadingStyle
}) => {
  return (
    <div className={isLoadingStyle}>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Index;