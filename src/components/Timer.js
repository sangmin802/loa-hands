import React, {useState, useEffect} from 'react';

function Timer(props){
  // console.log(props) // 받아옴
  const 
    now = new Date(),
    [timeOut, _setTimeOut] = useState(null),
    {name, src, time, setTime} = props;

  const intervalArr = [];

  useEffect(() => {
    console.log('부모에게서 새로운걸 받아왔습니다')
    if(props.time){
      const 
        [hour, min] = props.time.split(':'),
        year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        islTime = new Date(year, month, date, hour, min);
        startInterval(1, intervalTime.bind(null, islTime, time), 1000)
    }
    return () => {
      console.log('부모가 새로운것을줄 것 같아 삭제됩니다')
      intervalArr.forEach(interval => clearInterval(interval))
    }
  }, [props.time])

  function startInterval(second, callback){
    callback();
    const interval = setInterval(callback, second*1000);
    intervalArr.push(interval);
    return interval;
  }

  function intervalTime(_islTime, _time){
    const gap = _islTime-new Date();
    if(gap === 0 || 0 > gap){
      setTime(_time)
    }
    const 
      _sec = 1000,
      _min = _sec*60,
      _hour = _min*60,
      hour = Math.floor(gap / _hour),
      min = Math.floor((gap % _hour) / _min),
      sec = Math.floor((gap % _min) / _sec)
      _setTimeOut(`${hour}:${min}:${sec}`)
  }

  return(
    <div className="timer">
      <div className="timerName rem09 textCenter overflowDot">{name}</div>
      <div className="timerContent">
        <div className="timerImg">
          <img className="imgWidth" src={`https://github.com/sangmin802/loa-hands/blob/master/public/${src}?raw=true`} alt={name} />
        </div>
        <div className="timerTime">
          <div className="startTime rem08">{time}</div>
          <div className="startTime rem08">{timeOut}</div>
        </div>
      </div>
    </div>
  )
}

export default Timer;