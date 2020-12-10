import React from 'react';
import _ from '../../Utility.js';

function SingleTextBox({arr}){
  return (
    <div className="singleTextWrap">
      {
        arr.map(({value}, index) => {
          return (
            <div className="singleText rem09" key={'singleText'+index}>
              {_.getOnlyText(value)}
            </div>
          )
        })
      }
    </div>
  )
}

export default SingleTextBox;