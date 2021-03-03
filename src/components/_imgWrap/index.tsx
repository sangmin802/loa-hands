import React from 'react';
import './index.css';

export default ({
  backSrc, src, grade
} : {
  backSrc?, src?, grade?
}) => {
  
  return (
    <div className="imgWrap">
      {backSrc && <img className={`imgWidth  gradient${grade}`} src={backSrc} alt="partImg"/>}
      {src && <img className={`equipMainImg absolute imgWidth gradient${grade}`} src={src} alt={src} />}
    </div>
  )
};
