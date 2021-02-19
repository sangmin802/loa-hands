import React from 'react';
import ColumnList from 'components/userInfo-columnList/index';
import './index.css';

export default ({
  left, right, leftTitle, rightTitle, type, children
} : {
  left, right, leftTitle, rightTitle, type, children?
}) => {
  return (
    <div className="doubleColumnWrap">
      <div className="columnLeft">
        <div className="columnTitle rem09 textCenter">{leftTitle}</div>
        <div className="columnContent">
          {left.map((res, index) => {
            return (
              <ColumnList key={`columnLeft${index}`} data={res}>
                {children}
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
              <ColumnList key={`columnRight${index}`} data={res}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}
