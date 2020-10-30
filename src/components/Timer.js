import React, {useState, useEffect} from 'react';

function Timer(props){
  let 
    now = new Date(),
    [state, setState] = useState({timeOut : null, targetState : 'NORMAL'}),
    {timeOut, targetState} = state,
    borderColor = null,
    endTimeBg = null,
    {name, src, time, setTime, lv, position, endTime, contType} = props;
    const intervalArr = [];

  useEffect(() => {
    if(props.time){
      const 
        [hour, min] = props.time.split(':'),
        year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        closeTime = new Date(year, month, date, hour, min), // 섬 닫히는 시간
        startTime = new Date(year, month, date, hour, min-3); // 섬 열리는 시간
        startInterval(1, intervalTime.bind(null, closeTime, startTime, time), 1000)
    }else{
      // 만약, Wrap이 새롭게 랜더링 되고, 받아온 데이터에 시간이 없다면 NORMAL로 초기화
      setState({...state, targetState : 'NORMAL'});
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
  function intervalTime(_closeTime, _startTime, _time){
    let gap = _startTime-new Date();
    let targetState = 'NORMAL';
    if(gap === 600000 || 600000 > gap){
      if(contType !== 'fieldBoss') targetState = 'APPEAR';
    }
    if(gap === 0 || 0 > gap){
      targetState = 'OPEN';
      gap = _closeTime-new Date();
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
      sec = Math.floor((gap % _min) / _sec);
      setState({...state, targetState, timeOut : `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`})
  }
  switch(targetState){
    case 'APPEAR' : 
      borderColor = '#CC99FF';
      time = '일렁이는중'
    break;
    case 'OPEN' : 
      borderColor = '#FF6666';
      if(contType !== 'fieldBoss'){
        time = '출현중';
      }else{
        time = '대기중'
      }
    break;
    case 'NORMAL' : 
      borderColor = null;
    break;
  }

  if(!time){
    time = endTime;
    endTimeBg = 'block';
    timeOut = '종료';
  };

  return(
    <div className="timer" style={{borderColor : borderColor}}>
      <div style={{display : endTimeBg}} className="endTimeBg"></div>
      <div className="timerName rem09 textCenter overflowDot">{name}</div>
      <div className="timerContent">
        <div className="timerImg">
          <img className="imgWidth" src={`https://github.com/sangmin802/loa-hands/blob/master/public/${src}?raw=true`} alt={name} />
          <div className="timerLv rem07">{lv}</div>
        </div>
        <div className="timerTime">
          <div className="startTime rem08">{minusMin(time)}</div>
          <div className="timeOut rem08">{timeOut}</div>
        </div>
      </div>
      <div className="timerName rem09 textCenter overflowDot">{position}</div>
    </div>
  )
}

function minusMin(time){
  if(time.includes(':')){
    const [hour, min] = time.split(':');
    return `${addZero(Number(hour))}:${addZero(Number(min)-3)}`;
  }
  return time;
}

function addZero(num){
  if(num < 10){
    return '0'+num;
  }
  return num;
}

export default React.memo(Timer, (prev, next) => {
  // console.log(prev.name+':'+prev.time,next.name +':'+ next.time)
  return false;
});