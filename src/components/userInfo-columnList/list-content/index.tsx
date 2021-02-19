import React from 'react';

export default ({
  textA,textB,itemGrade
} : {textA?,textB?,itemGrade?}) => {
  return(
    <div className="columnListContent">
      <div className={`rem07 overflowDot color${itemGrade}`}>{textA}</div>
      <div className={`rem09 overflowDot`}>{textB}</div>
    </div>
  )
}