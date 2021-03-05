import React from 'react';
import './index.css';
import ColumnWrap from 'components/_columnWrap/index';
import _ from 'utility';

export default ({
  data, type, lt, rt
} : {
  data, type, lt?, rt?
}) => {
  const [left, right] = _.arrayReducer(data, type)
  return (
    <div className='doubleColumnWrap'>
      <ColumnWrap title={lt} arr={left} side="left" />
      <ColumnWrap title={rt} arr={right} side="right" />
    </div>
  )
}
