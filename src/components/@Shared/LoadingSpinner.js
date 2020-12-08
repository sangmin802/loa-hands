import React from 'react';
import '../../css/App.css';

function LoadingSpinner({isLoadingStyle}){
  return (
    <div className={isLoadingStyle}>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingSpinner;