import React from 'react';
import '../../css/App.css';

const LoadingSpinner : React.FC<{isLoadingStyle : string}> = ({
  isLoadingStyle
}) => {
  return (
    <div className={isLoadingStyle}>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingSpinner;