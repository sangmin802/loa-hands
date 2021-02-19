import React from 'react';
import _ from 'utility';

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
    <div className={`listDetail hoverContent zIndex10`}>
      <div className="listDetailTop">
        <div className="listDetailImg">
          <div className="listDetailImgs">
            {backSrc && <img className="imgWidth" src={backSrc} alt="partImg"/>}
            {src && <img className={`equipMainImg absolute imgWidth gradient${grade}`} src={src} alt={src} />}
          </div>
        </div>
        <div className="listDetailMainInfo">
          <div className={`listDetailName overflowDot color${grade}bold rem1`}>
            {hoverTextA}
          </div>
          <div className={`listDetailGrade overflowDot color${grade}bold rem09`}>
            {hoverTextB}
          </div>
          <div className='listDetailTier overflowDot rem09'>
            {hoverTextC}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Index;