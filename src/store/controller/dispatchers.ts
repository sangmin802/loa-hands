import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import * as Actions from './actions'

export function Dispatch(){
  const dispatch = useDispatch();
  return dispatch
};

export const Header = () => {
  const dispatch = Dispatch();
  const getUserData = useCallback((value, history) => {
   dispatch(Actions.getUserData_Saga_Async(value, history))
  }, [])
  const setHomeData = useCallback((history) => {
   dispatch(Actions.setHomeData_Thunk(history))
  }, []);
  return {getUserData, setHomeData};
}