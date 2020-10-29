import React, {useState, useEffect} from 'react';

function Timer(props){
  let 
    now = new Date(),
    [state, setState] = useState({timeOut : null, islState : 'NORMAL'}),
    {timeOut, islState} = state,
    color = null,
    {name, src, time, setTime} = props;
  const intervalArr = [];
  useEffect(() => {
    if(props.time){
      const 
        [hour, min] = props.time.split(':'),
        year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        islCloseTime = new Date(year, month, date, hour, min), // 섬 닫히는 시간
        islOpenTime = new Date(year, month, date, hour, min-3); // 섬 열리는 시간
        startInterval(1, intervalTime.bind(null, islCloseTime, islOpenTime, time), 1000)
    }
    return () => {
      intervalArr.forEach(interval => clearInterval(interval))
    }
  }, [props.time])

  function startInterval(second, callback){
    callback();
    const interval = setInterval(callback, second*1000);
    intervalArr.push(interval);
    return interval;
  }
  function intervalTime(_islCloseTime, _islOpenTime, _time){
    let gap = _islOpenTime-new Date();
    let islState = 'NORMAL'
    if(gap === 600000 || 600000 > gap){
      islState = 'APPEAR';
    }
    if(gap === 0 || 0 > gap){
      islState = 'OPEN';
      gap = _islCloseTime-new Date();
      if(gap === 0 || 0 > gap){
        setTime(_time);
        return;
      }
    }
    const 
      _sec = 1000,
      _min = _sec*60,
      _hour = _min*60,
      hour = Math.floor(gap / _hour),
      min = Math.floor((gap % _hour) / _min),
      sec = Math.floor((gap % _min) / _sec)
      setState({...state, islState, timeOut : `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`})
  }
  if(!time) time = '내일 만나요';

  switch(islState){
    case 'APPEAR' : 
      color = '#CC99FF';
      time = '일렁이는중'
    break;
    case 'OPEN' : 
      color = '#FF6666';
      time = '출현중'
    break;
  }

  return(
    <div className="timer" style={{borderColor : color}}>
      <div className="timerName rem09 textCenter overflowDot">{name}</div>
      <div className="timerContent">
        <div className="timerImg">
          <img className="imgWidth" src={`https://github.com/sangmin802/loa-hands/blob/master/public/${src}?raw=true`} alt={name} />
        </div>
        <div className="timerTime">
          <div className="startTime rem08">{minusMin(time)}</div>
          <div className="timeOut rem08">{timeOut}</div>
        </div>
      </div>
    </div>
  )
}

function minusMin(time){
  if(time.includes(':')){
    const [hour, min] = time.split(':');
    return `${addZero(hour)}:${addZero(Number(min)-3)}`;
  }
  return time;
}

function addZero(num){
  if(num < 10){
    return '0'+num;
  }
  return num;
}

export default Timer;