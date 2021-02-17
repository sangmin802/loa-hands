import React from 'react';
import styled from 'styled-components';

const B_UserInfoWrap = styled.div`
  background : #000000;
  border-radius : 3px;
  padding : 1rem;
`
const B_BasicInfoWrap = styled.div`
  width : 50%;
  display : flex;
  flex-wrap : wrap;
`
const B_BasicInfo = styled.div`
  width : ${(props : {width : number}) => `${props.width}%`};
  display : flex;
  flex-wrap : wrap;
  margin : 0 .3rem .3rem 0;
  padding-bottom : 15%;
  background : #1f222a;
`

const B_UserCollectoinWrap = styled.div`
  display : flex;
  margin : 1rem 0;
`

const B_UserCollection = styled.div`
  flex-grow : 1;
  margin-right : ${(props : {num : number}) => {
    if(props.num!==8) return '.5rem';
  }};
  background : #1f222a;
  padding-bottom : 5%;
  border-radius : 3px;

`

const B_UserEquipWrap = styled.div`
  justify-content : space-between;
`

const B_UserEquip = styled.div`
  padding : 2rem;
  margin-bottom : 10px;
  background : #1f222a;
  border-radius : 3px;

`
const Index = () => {
  return (
    <B_UserInfoWrap>
      <B_BasicInfoWrap>
        {[80,45,45,35,35,35,35,35,35].map((i, index) => <B_BasicInfo width={i} key={index+'B_basicInfo'}/>)}
      </B_BasicInfoWrap>
      <B_UserCollectoinWrap>
        {[1,2,3,4,5,6,7,8].map((i, index) => <B_UserCollection num={i} key={index+'B_collection'}/>)}
      </B_UserCollectoinWrap>
      <B_UserEquipWrap>
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((i, index) => <B_UserEquip key={index+'B_userEquip'}/>)}
      </B_UserEquipWrap>
    </B_UserInfoWrap>
  )
}

export default Index;