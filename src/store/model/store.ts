import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import {rootSaga} from '../controller/actions';



const sagaMiddelware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(ReduxThunk, sagaMiddelware))
// export const store = createStore(reducer, applyMiddleware(ReduxThunk))
sagaMiddelware.run(rootSaga)

export type RootState = ReturnType<typeof reducer> // 앞으로 useSelector로 상태에 접근할 때 사용할 타입