import React from 'react';

import _ from 'utility';
import ImgTextWrap from 'components/_imgTextWrap/index';

export default ({
  skillTripod
}) => {
  const tripodValues = Object.values(skillTripod.value);
  return (
    <>
      {
        tripodValues.map((res : any, index) => {
          if(res.name === '') return null;
          const {name, desc, tier, slotData : {iconPath}} = res;
          return (
            <div className="tripod-ImgTextWrap"
              key={`skillTripod${name}${index}`}           
            >
              <ImgTextWrap 
                backSrc={`//cdn-lostark.game.onstove.com/${iconPath}`} 
                text={[`${_.getOnlyText(tier)} ${_.getOnlyText(name)}`, _.getOnlyText(desc)]}
              />
            </div>
          ) 
        })
      }
    </>
  )
}