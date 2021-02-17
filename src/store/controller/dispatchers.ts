import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import * as Actions from './actions'

export const Dispatch = () => {
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

export const UserInfo = () => {
  const dispatch = Dispatch();
  const expeditionPopToggle = useCallback((bool) => {
    dispatch(Actions.expeditionPopToggle(bool));
  }, []);
  const changeUserInfoMainTab = useCallback((index) => {
    dispatch(Actions.changeUserInfoMainTab(index));
  }, [])
  const getUserData = useCallback((value, history) => {
    dispatch(Actions.getUserData_Thunk(value, history))
    // dispatch(Actions.getUserData_Saga(value, history))
  }, []);

  return {expeditionPopToggle, changeUserInfoMainTab, getUserData};
}