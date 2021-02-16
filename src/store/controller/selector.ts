import {useSelector, shallowEqual} from 'react-redux';
import {RootState} from 'store/model/store'

export const Selector = (
  arr : string[], 
  shallow : (T : any, U : any) => boolean = shallowEqual
) => {
  return useSelector((state : RootState) => {
    let obj = {};
    arr.forEach(res => obj[res] = state[res])

    return obj;
  }, shallow);
};
