import React from 'react';
import styled from 'styled-components';

const BlankWrap = styled.div`
  display : flex;
  flex-wrap : wrap;
  justify-content : space-between;
`

const BlankHeader = styled.div`
  border-radius : 3px;
  background : #000000;
  padding-bottom : 6%;
  background : #000000;
`

const Blank = styled.div`
  width : 49%;
  border-radius : 3px;
  margin-bottom : 2%;
  margin-top : 2%;
  overflow : hidden;
  box-sizing : border-box;
`

const BlankTop = styled.div`
  padding-bottom : 50%;
  background : #666;
`

const BlankBottom = styled.div`
  padding-bottom : 15%;
  background : #000000;
`

const homeBlank = ({data}) => {
  return (
    <>
      <BlankHeader />
      <BlankWrap>
        {data.map((res, index) => {
          return (
            <Blank key={index}>
              <BlankTop />
              <BlankBottom />
            </Blank>
          )
        })}
      </BlankWrap>
    </>
  )
}

export default React.memo(homeBlank, () => true)