import React from 'react';
import _ from 'utility';

const SingleTextBox = ({
  data
}) => {
  if(!data) return null;

  const arr = _.getSameTypeObj(Object.values(data), "SingleTextBox");
  
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