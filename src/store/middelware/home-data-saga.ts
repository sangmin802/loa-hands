import { put, takeLatest, call } from "redux-saga/effects";
import { expeditionPopToggle } from "../ducks/toggle-slicer";
import { resetNav } from "../ducks/nav-slicer";
import Api from "api/api";
import { GET_HOME_DATA_SAGA, getHomeData } from "../ducks/ajax-slicer";

export function* getHomeData_Saga() {
  try {
    const homeData = yield call(Api.getHomeData);
    yield put(expeditionPopToggle());
    yield put(resetNav());
    yield put(getHomeData({ homeData }));
  } catch (err) {
    alert(err);
  }
}

export function* homeDataSaga() {
  yield takeLatest(GET_HOME_DATA_SAGA, getHomeData_Saga); // 가장 마지막으로 디스패치된 액션만을 처리
}
