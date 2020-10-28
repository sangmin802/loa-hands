import React, {useState} from 'react';
import Timer from './Timer.js';

function TimerWrap({data}){
  const setTime = (time) => {
   setState({...state, time}) 
  }
  const [state, setState] = useState({time : null, setTimeFunc : setTime});
  const {setTimeFunc} = state;
  const date = new Date();
  const newData = [...data];

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
  })

  newData.forEach((is, index) => {
    is.time = validTimes[index]
  })
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

  return(
    <div className="timerWrap">
      {newData.map((data, index) => {
        let {name, src, time : [first]} = data;
        return <Timer 
                  setTime={setTimeFunc} 
                  name={name}  
                  src={src}
                  time={first}
                  key={`timer${index}`}
                />
      })}
    </div>
  )
}

export default React.memo(TimerWrap, () => true);