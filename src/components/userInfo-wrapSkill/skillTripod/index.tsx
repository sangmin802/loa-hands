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
                textA={`${_.getOnlyText(tier)} ${_.getOnlyText(name)}`} 
                textB={_.getOnlyText(desc)}
              />
            </div>
          ) 
          // return (
          //   <div className="skillTripod" key={`skillTripod${name}${index}`}>
          //     <div className="skillTripodImg">
          //       <img className="imgWidth" src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={name} />
          //     </div>
          //     <div className="skillTripodContent">
          //       <div className="skillTripodNameLv rem09">
          //         {_.getOnlyText(tier)} {_.getOnlyText(name)}
          //       </div>
          //       <div className="skillTripodDesc rem07">
          //         {_.getOnlyText(desc)}
          //       </div>
          //     </div>
          //   </div>
          // )
        })
      }
    </>
  )
}