import React from 'react';

export default ({
  backSrc,
  src,
  grade
} : {
  backSrc?,
  src?,
  grade?
}) => {
  
  return (
    <div className="imgTextImg">
      {backSrc && <img className={`imgWidth  gradient${grade}`} src={backSrc} alt="partImg"/>}
      {src && <img className={`equipMainImg absolute imgWidth gradient${grade}`} src={src} alt={src} />}
    </div>
  )
};
