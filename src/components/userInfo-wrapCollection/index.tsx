import React from 'react';
import {Selector} from 'store/controller/selector';
import _ from 'utility';
import './index.css';

import DoubleColumnList from 'components/_doubleColumnWrap/index';
import Collection from './collection/index';

const Index = () => {
  const {userData} = Selector(['userData']);
  const {collectionDetail} = userData;

  const arrayReducer = React.useCallback((arr) => {
    return arr.reduce((prev, cur) => {
      if(cur.isGet){
        prev[0].push(cur);
      }else{
        prev[1].push(cur);
      }
      return prev;
    }, [[],[]])
  }, [])
  
  return (
    <div className="collectionWrap">
      {collectionDetail.map(({detail, getCount, totalCount, title}, index) => {
        const [get, noGet] = arrayReducer(detail);
        return (
          <DoubleColumnList 
            key={`${title}${index}`}
            left={get} 
            right={noGet} 
            leftTitle={title} 
            rightTitle={`획득 : ${getCount} 미획득 : ${totalCount}`}
          >
            <Collection />
          </DoubleColumnList>
        )
      })}
    </div>
  )
};

export default React.memo(Index, () => true);