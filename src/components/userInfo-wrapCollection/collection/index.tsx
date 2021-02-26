import React from 'react';
import _ from 'utility';
import ImgTextWrap from 'components/_imgTextWrap/index';

export default ({
  data, 
} : {
  data?,
}) => {
  const {no, name} = data;
  return (
      <ImgTextWrap 
        textA={`#${no}`}
        textB={name}
      />
  )
}