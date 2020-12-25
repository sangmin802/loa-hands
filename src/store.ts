import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducer from './reducer';

export const store = createStore(reducer, applyMiddleware(ReduxThunk))

export type RootState = ReturnType<typeof reducer> // 앞으로 useSelector로 상태에 접근할 때 사용할 타입