import React from 'react';

export default ({
  textA,textB,grade
} : {textA?,textB?,grade?}) => {
  if(!textA) return;
  return(
    <div className="columnListContent">
      <div className={`rem07 overflowDot color${grade}`}>{textA}</div>
      <div className={`rem09 overflowDot`}>{textB}</div>
    </div>
  )
}