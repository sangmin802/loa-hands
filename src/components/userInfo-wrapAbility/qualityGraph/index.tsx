import React from 'react';
import _ from 'utility';

export default ({
  data,
} : {
  data?
}) => {
  const {detail, equipGroupType} = data;
  const {ItemTitle0} = detail;
  const [,,, qualityValue] = _.multipleValues(ItemTitle0.value);
  const qualityColor = _.setQualityColor(qualityValue);
  
  if(equipGroupType==='Stone') return null;
  if(typeof qualityValue !== 'number') return null;

  return (
    <div className='hoverDetailQuality textCenter rem08'>
      품질 {qualityValue}%
      <div className={`qualityValue gradient${qualityColor}`} style={{width : `${qualityValue}%`}}>
      </div>
    </div>
  )
}