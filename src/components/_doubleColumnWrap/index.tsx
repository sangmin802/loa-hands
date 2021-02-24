import React from 'react';
import './index.css';

export default ({
  left, right, leftTitle, rightTitle, children
} : {
  left, right, leftTitle?, rightTitle?, children?
}) => {
  return (
    <div className='doubleColumnWrap'>
      <div className="columnLeft">
        <div className="columnTitle rem09 textCenter">{leftTitle}</div>
        <div className="columnContent">
          {left.map((res, index) => {
            return {...children, props : {...children.props, data : res, index, side:"left"}}
          })}
        </div>
      </div>
      <div className="columnRight">
        <div className="columnTitle rem09 textCenter">{rightTitle}</div>
        <div className="columnContent">
          {right.map((res, index) => {
            return {...children, props : {...children.props, data : res, index, side:"right"}}
          })}
        </div>
      </div>
    </div>
  )
}
