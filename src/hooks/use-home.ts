import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getHomeData_Saga_Async } from "store/ducks/ajax-slicer";
import { RootState } from "store/index";
import Lodash from "lodash";

export function useHome() {
  const dispatch = useDispatch();
  const history = useHistory();

  const homeData = useSelector(
    (state: RootState) => state.ajaxReducer.homeData,
    (left, right) => Lodash.isEqual(left, right)
  );

  const setHomeData = useCallback(() => {
    history.replace("/");
    dispatch(getHomeData_Saga_Async(history));
  }, [dispatch, history]);

  return { homeData, setHomeData };
}
