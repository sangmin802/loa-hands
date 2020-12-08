import React, {useState} from 'react';
import Timer from './Timer.js';

function TimerWrap({data}){
  const setTime = (time) => {
   setState({...state, time}) 
  }
  const [state, setState] = useState({time : null, setTimeFunc : setTime});
  const {setTimeFunc} = state;
  const date = new Date();
  // 배열 내 객체도 모두 복사
  const newData = [...data].map(obj => ({...obj}));

  // 렌더링 시, 현재 시간 이후의 시간들만 유지
  const validTimes = newData
  .map(is => is.time)
  .map(group => {
    return group.filter(time => {
      const 
        newTime = time.replace(':', ''),
        min = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes(),
        now = String(date.getHours())+String(min);
      if(Number(newTime) > Number(now)) return time;
      return null;
    })
  });

  newData.forEach((is, index) => {
    is.time = validTimes[index];
    if(typeof is.position !== 'string'){
      if(validTimes[index].length !== 0){
        is.position = is.position.slice(-validTimes[index].length);
        return
      };
      is.position = [];
    }
  })

  // 가장 먼저 열리는 섬 순서대로 진열. 종료시, 맨 뒤로
  newData.sort((a, b) => {
    const 
      time_a = a.time[0],
      time_b = b.time[0];
    if(!time_b){
      return -1
    }
    if(time_a > time_b){
      return 1;
    }else if(time_a < time_b){
      return -1;
    }
    return 0;
  })

  if(newData.length !== 0){
    return(
      <div className="timerWrap">
        {newData.map((data, index) => {
          let {name, src, time : [first], position, endPosition, lv, endTime, waiting, contType} = data;
          if(typeof position !== 'string'){
            position = position[0] || endPosition;
          }
          return <Timer 
                    setTime={setTimeFunc} 
                    name={name}  
                    src={src}
                    time={first}
                    endTime={endTime}
                    position={position}
                    lv={lv}
                    contType={contType}
                    waiting={waiting}
                    key={`timer${index}`}
                  />
        })}
      </div>
    )
  }else{
    return(
      <div className="noTimerContent textCenter">
        다음에 만나요
      </div>
    )
  }
}

export default React.memo(TimerWrap, (prev, next) => {
  // 자정이 되어서 변경된 homeDate로 Home이 다시 렌더링 될 때, Home에서 받아온 today 속성값의 변경으로 TimeWrap 다시 렌더링
  if(prev.today !== next.today) return false;
  return true;
});