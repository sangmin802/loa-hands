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
    <div className="columnListImg">
      {backSrc &&
        <img className="imgWidth" src={backSrc} alt="partImg"/>
      }
      {src &&
        <img className={`equipMainImg absolute imgWidth gradient${grade}`} src={src} alt={src} />
      }
    </div>
  )
};
