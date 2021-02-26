import React from 'react';
import './index.css';
import ColumnList from 'components/_columnList/index';

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
            return (
              <ColumnList>
                {{...children, props : {...children.props, data : res, index, side:"left"}}}
              </ColumnList>
            )
            
          })}
        </div>
      </div>
      <div className="columnRight">
        <div className="columnTitle rem09 textCenter">{rightTitle}</div>
        <div className="columnContent">
          {right.map((res, index) => {
            return (
              <ColumnList>
                {{...children, props : {...children.props, data : res, index, side:"right"}}}
              </ColumnList>
            )
          })}
        </div>
      </div>
    </div>
  )
}
