import {useEffect} from 'react';
import {Dispatch} from 'store/controller/dispatchers';
import * as Actions from 'store/controller/actions';

const DateOver = (homeData) => {
  const dispatch = Dispatch()
  useEffect(() => {
    if(!homeData) dispatch(Actions.setHomeData_Thunk());

    const checkNight = function(){
      const hour = new Date().getHours();
      const min = new Date().getMinutes();
      const sec = new Date().getSeconds();
      if(hour === 0 && min === 0 && sec === 0){
        dispatch(Actions.setHomeData_Thunk());
      }
    }
    const checkInterval = setInterval(checkNight, 1000);
    return () => {
      clearInterval(checkInterval)
    }
  }, [])
}

export default DateOver