import React from 'react';
import ColumnList from 'components/_columnList/index';

const ColumnWrap = ({
  title, arr, side
}) => {
  // 자식은 hoverDetail
  return (
    <div className={`column${side}`}>
      <div className="columnTitle rem09 textCenter">{title}</div>
      <div className="columnContent">
        {arr.map((res, index) => {
          return (
            <ColumnList key={`columnList${side}${index}`}
              data={res}
            />
          )   
          // return (
          //   <ColumnList key={`columnList${side}${index}`}>
          //     {{...children, props : {...children.props, data : res, index, side}}}
          //   </ColumnList>
          // )   
        })}
      </div>
    </div>
  )
}

export default ColumnWrap;