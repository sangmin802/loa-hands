import React from 'react';

function UserCollectionList({data : {detail, getCount, title, totalCount}}){

  const parsedDetail = ParseDetail(detail)

  return(
    <div className="userCollectionWrap">
      <div className="userCollectionTitle textCenter">{title}</div>
      <div className="userCollectionCount textCenter rem09">
        {getCount} / {totalCount}
      </div>
      <div className="userCollectionDetailWrap">
      {parsedDetail.map((arr, index) => {
        const side = index === 0 ? 'Right' : 'Left';
        return <UserCollectionSideWrap 
                  key={`userCollectionSide${side}`}
                  side={side}
                  index={index}
                  arr={arr}
               />
      })}
      </div>
    </div>    
  )
}

function ParseDetail(detail){
  return detail.reduce((prev, cur) => {
    if(cur.isGet){
      prev[0].push(cur)
    }else{
      prev[1].push(cur)
    }
    return prev;
  }, [[],[]]);
}

function UserCollectionSideWrap({side, index, arr}){
  return(
    <div className={`userCollectionSide userCollection${side}`}>
      <div className="userCollectionIsGet">
        {index === 0 ? '획득' : '미획득'}
      </div>
      {arr.map((col, colIndex) => {
        return <UserCollection 
                  key={`userCollection${colIndex}`}
                  col={col}
               />
      })}
    </div>
  )
}

function UserCollection({col}){
  return (
    <div className="userCollection">
      <div className="userCollectionNo">{col.no}.</div>
      <div className="userCollectionName overflowDot">{col.name}</div>
    </div>
  )
}

export default UserCollectionList;