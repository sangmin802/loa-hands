import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { ajaxReducer } from "./ducks/ajaxSlicer";
import { toggleReducer } from "./ducks/toggleSlicer";
import { tabReducer } from "./ducks/tabSlicer";
import { homeDataSaga } from "./middelware/homeDataSaga";
import { userDataSaga } from "./middelware/userDataSaga";
import { all } from "redux-saga/effects";

const sagaMiddelware = createSagaMiddleware();
const rootReducer = combineReducers({
  ajaxReducer,
  toggleReducer,
  tabReducer,
});
export function* rootSaga() {
  yield all([homeDataSaga(), userDataSaga()]); // saga 실행
}
export const store = createStore(rootReducer, applyMiddleware(sagaMiddelware));
sagaMiddelware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>; // state 타입
