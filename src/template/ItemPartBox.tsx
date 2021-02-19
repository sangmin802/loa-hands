import React from 'react';
import _ from 'utility';

const ItemPartBox = ({
  data
} : {
  data?
}) => {  
  if(!data) return null;
  const arr = _.getSameTypeObj(Object.values(data), "ItemPartBox")
  return (
    <div className="itemPartBoxWrap">
      {
        arr.map(({value : {Element_000, Element_001}}, index) => {
          return (
            <div className="itemPartBox" key={'itemPartBox'+index}>
              <div className="itemPartBoxTitle rem09">{_.getOnlyText(Element_000)}</div>
              <div className="itemPartBoxContent rem09">{_.getOnlyText(Element_001)}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemPartBox;