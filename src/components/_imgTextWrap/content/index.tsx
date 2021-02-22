import React from 'react';

export default ({
  textA,textB,grade
} : {textA?,textB?,grade?}) => {
  
  return(
    <div className="imgTextContent">
      {textA && <div className={`rem07 overflowDot color${grade}`}>{textA}</div>}
      {textB && <div className={`rem09 overflowDot`}>{textB}</div>}
    </div>
  )
}