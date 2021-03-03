import React from 'react';
import _ from 'utility';
import ColumnList from 'components/_columnList/index';
import ImgTextWrap from 'components/_imgTextWrap/index';

export default ({
  data,
  index,
  side
} : {
  data?,
  index?
  side?
}) => {
  return (
      <ImgTextWrap 
        backSrc={`https://github.com/sangmin802/loa-hands/blob/master/public/img/lifeskill/${side}${index}.PNG?raw=true`}
        text={[data.lv, data.name]}
      />
  )
}