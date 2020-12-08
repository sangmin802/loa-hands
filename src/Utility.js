import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

export default {
  GetHooks(){
    const history = useHistory();
    const dispatch = useDispatch();
    return {history, dispatch};
  }
}