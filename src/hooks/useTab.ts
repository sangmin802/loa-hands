import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainTab, setSubTab } from "store/ducks/tabSlicer";
import { RootState } from "store/index";
import _ from "utility/utility";

export function useTab(type) {
  const dispatch = useDispatch();

  const tab = useSelector(
    (state: RootState) => state.tabReducer[type],
    (left, right) => _.compareObj(left, right)
  );

  const setTab = useCallback(
    tab => {
      const method = type === "main" ? setMainTab : setSubTab;
      dispatch(method(tab));
    },
    [type, dispatch]
  );

  return { tab, setTab };
}