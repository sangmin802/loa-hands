import React from 'react';
import './index.css';

export default ({
  left, right, leftTitle, rightTitle, children, style
} : {
  left, right, leftTitle?, rightTitle?, children?, style?
}) => {
  return (
    <div className={`${style} doubleColumnWrap`}>
      <div className="columnLeft">
        <div className="columnTitle rem09 textCenter">{leftTitle}</div>
        <div className="columnContent">
          {left.map((res) => {
            return {...children, props : {...children.props, data : res}}
          })}
        </div>
      </div>
      <div className="columnRight">
        <div className="columnTitle rem09 textCenter">{rightTitle}</div>
        <div className="columnContent">
          {right.map((res) => {
            return {...children, props : {...children.props, data : res}}
          })}
        </div>
      </div>
    </div>
  )
}
