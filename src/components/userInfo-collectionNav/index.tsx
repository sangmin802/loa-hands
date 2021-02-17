import React from 'react';
import CollectionImg from './collection/index';
import _ from 'utility';

const Index = ({data}) => {
  
  return(
    <>
      {
        data.map((col, index) => {
          return <CollectionImg 
                    key={`collectionMini${index}`}
                    index={index}
                    size={col.size}
                  />
        })
      }
    </>
    
  )
}

export default React.memo(Index, (prev, next) => {
  if(_.compareObj(prev, next)) return true;
  return false;
});