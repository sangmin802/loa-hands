import React from 'react';
import _ from 'utility';
import ColumnList from 'components/_columnList/index';
import ImgTextWrap from 'components/_imgTextWrap/index';

export default ({
  data,
  index
} : {
  data?,
  index?
}) => {
  console.log(data)

  return (
    <ColumnList>
      <ImgTextWrap 
        src={`img/lifeskill/1.PNG`}
        textA={data.Lv}
        textB={data.name}
      />
    </ColumnList>
  )
}