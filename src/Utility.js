import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

export default {
  GetHooks(){
    const history = useHistory();
    const dispatch = useDispatch();
    return {history, dispatch};
  },

  // 아바타 or 장비 나누기
  divideEquipInfo(equipInfo){
    return Object.keys(equipInfo)
    .reduce((prev, cur) => {
      if(!cur.includes('av_')){
        prev[0].push(equipInfo[cur])
      }else{
        prev[1].push({...equipInfo[cur], avatarPart : cur})
      }
      return prev;
    }, [[], []]);
  },
}