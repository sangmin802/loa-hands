import React from 'react';
import _ from 'utility';

export default ({
  data,
  children
} : {
  data?
  children
}) => {
  if(!data) return null;
  const arr =  _.getSameTypeObj(Object.values(data), "TripodSkillCustom");

  return arr.map((res, index) => {
    return (
      <Item key={`tripodSkillCustom${index}`} tripod={res}>
        {children}
      </Item>
    )
  })
}

const Item = ({
  tripod,
  children
}) => {
  if(!tripod) return null;
  const tripodValues = Object.values(tripod.value);
  return (
    <>
      {
        tripodValues.map(data => {
          return {...children, props : {data}}
        })
      }
    </>
  ) 
}