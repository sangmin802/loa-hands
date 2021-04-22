import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getHomeData_Saga_Async } from "store/ducks/ajaxSlicer";
import { RootState } from "store/index";
import _ from "utility/utility";

export function useHome() {
  const dispatch = useDispatch();
  const history = useHistory();
  const homeData = useSelector(
    (state: RootState) => state.ajaxReducer.homeData,
    (left, right) => _.compareObj(left, right)
  );

  const setHomeData = useCallback(() => {
    if (homeData) return history.replace("/");
    dispatch(getHomeData_Saga_Async(history));
  }, [dispatch, history, homeData]);

  return { homeData, setHomeData };
}
