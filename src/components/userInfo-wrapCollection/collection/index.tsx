import React from 'react';
import _ from 'utility';
import ColumnList from 'components/_columnList/index';
import ImgTextWrap from 'components/_imgTextWrap/index';

export default ({
  data, 
} : {
  data?,
}) => {
  const {no, name} = data;
  return (
    <ColumnList>
      <ImgTextWrap 
        textA={`#${no}`}
        textB={name}
      />
    </ColumnList>
  )
}