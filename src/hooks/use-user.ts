import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserData_Saga_Async } from "store/ducks/ajax-slicer";
import { RootState } from "store/index";
import _ from "utility/utility";

export function useUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userData = useSelector(
    (state: RootState) => state.ajaxReducer.userData,
    (left, right) => _.compareObj(left, right)
  );

  const setUserData = useCallback(
    name => {
      dispatch(getUserData_Saga_Async(name, history));
    },
    [history, dispatch]
  );

  return { userData, setUserData };
}
