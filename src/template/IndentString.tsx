import React from 'react';
import _ from 'utility';
import TextWrap from 'components/_textWrap/index';

const IntentString = ({
  data
} : {
  data?
}) => {
  return (
    <div className="indentStrings">
      {data.map(({title, desc, option}, index) => {
        const grade = option.active ? '' : 0;
        const bool = typeof desc[0] === 'string';
        return(
          <div key={index} className={`color${grade}`}>
            <div>{title}</div>
            {bool && <TextWrap text={desc} />}
            {!bool && desc[0].map((txt, index2) => <div key={index2}>{txt}</div>)}
          </div>
        ) 
      })}
    </div>
  )
}

export default IntentString;