import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { ajaxReducer } from "./ducks/ajax-slicer";
import { toggleReducer } from "./ducks/toggle-slicer";
import { navReducer } from "./ducks/nav-slicer";
import { homeDataSaga } from "./middelware/home-data-saga";
import { userDataSaga } from "./middelware/user-data-saga";
import { all } from "redux-saga/effects";

const sagaMiddelware = createSagaMiddleware();
const rootReducer = combineReducers({
  ajaxReducer,
  toggleReducer,
  navReducer,
});
export function* rootSaga() {
  yield all([homeDataSaga(), userDataSaga()]); // saga 실행
}
export const store = createStore(rootReducer, applyMiddleware(sagaMiddelware));
sagaMiddelware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>; // state 타입
