import React from 'react';
import './index.css';

export default ({
  backSrc, src, grade
} : {
  backSrc?, src?, grade?
}) => {
  
  return (
    <div className="imgWrap">
      {backSrc && <img className={`imgWidth contentBoxBorder gradient${grade}`} src={`//cdn-lostark.game.onstove.com/${backSrc}`} alt="partImg"/>}
      {src && <img className={`equipMainImg absolute imgWidth gradient${grade}`} src={`//cdn-lostark.game.onstove.com/${src}`} alt={src} />}
    </div>
  )
};
