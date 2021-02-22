import React from 'react';
import _ from 'utility';
import './index.css';

const Index = ({
  backSrc, 
  src, 
  grade,
  hoverTextA,
  hoverTextB,
  hoverTextC,
  children,
} : {
  backSrc? 
  src? 
  grade?
  hoverTextA?
  hoverTextB?
  hoverTextC?
  children?
}) => {
  return(
    <div className={`hoverDetail hoverContent zIndex10`}>
      <div className="hoverDetailTop">
        <div className="hoverDetailImg">
          <div className="hoverDetailImgs">
            {backSrc && <img className="imgWidth" src={backSrc} alt="partImg"/>}
            {src && <img className={`equipMainImg absolute imgWidth gradient${grade}`} src={src} alt={src} />}
          </div>
        </div>
        <div className="hoverDetailMainInfo">
          <div className={`overflowDot color${grade}bold rem1`}>
            {hoverTextA}
          </div>
          <div className={`overflowDot color${grade}bold rem09`}>
            {hoverTextB}
          </div>
          <div className='overflowDot rem09'>
            {hoverTextC}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Index;