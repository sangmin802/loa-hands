import {useSelector} from 'react-redux';
import {RootState} from 'store/model/store'
import _ from 'utility';


const shallow = (left, right) => {
  if(_.compareObj(left, right)) return true;
  return false;
}

export const Selector = (
  arr : string[]
) => {
  return useSelector((state : RootState) => {
    let obj = {};
    arr.forEach(res => obj[res] = state[res])

    return obj;
  }, shallow);
};


