import React from 'react';
import _ from 'utility';
import ImgTextWrap from 'components/_imgTextWrap/index';

const Index = ({data}) => {
  return (
    <div className="tripodSkillCustoms">
      {data.map((ts, index) => {
        const {name = null, desc = null, grade = null, src = null} = ts;
        return <ImgTextWrap 
          key={`ts${index}`} 
          backSrc={src} 
          text={[name, desc]}
          grade={grade}
        />
      })}
    </div>
  )
  // console.log(data)
  // return <Im;
  // if(!data) return null;
  // const arr =  _.getSameTypeObj(Object.values(data), "TripodSkillCustom");

  // return arr.map((res, index) => {
  //   return (
  //     <Item key={`tripodSkillCustom${index}`} tripod={res}>
  //       {children}
  //     </Item>
  //   )
  // })
}

export default Index;

// const Item = ({
//   tripod,
//   children
// }) => {
//   if(!tripod) return null;
//   const tripodValues = Object.values(tripod.value);
//   return (
//     <>
//       {
//         tripodValues.map(data => {
//           return {...children, props : {data}}
//         })
//       }
//     </>
//   ) 
// }