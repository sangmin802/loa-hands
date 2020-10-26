import React from 'react';

function Home(redux){
  const {homeData, setHomeData} = redux;
  if(!homeData){
    setHomeData();
    return(
      <div className="home loading">
        로딩중
      </div>
    )
  }
  return(
    <div className="home">
      홈화면입니다
    </div>
  )
}

export default Home;