import {useEffect} from 'react';
import {Dispatch} from 'store/controller/dispatchers';
import History from 'hooks/history'
import * as Actions from 'store/controller/actions';

export const GetUserData = (userData, name) => {
  const dispatch = Dispatch();
  const history = History();
  useEffect(() => {
    if(!userData) dispatch(Actions.getUserData_Thunk(name, history));

    
  }, [])
}