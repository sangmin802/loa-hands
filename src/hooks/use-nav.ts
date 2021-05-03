import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainNav, setSubNav } from "store/ducks/nav-slicer";
import { RootState } from "store/index";
import Lodash from "lodash";

export function useNav(type) {
  const dispatch = useDispatch();

  const nav = useSelector(
    (state: RootState) => state.navReducer[type],
    (left, right) => Lodash.isEqual(left, right)
  );

  const setNav = useCallback(
    nav => {
      const method = type === "main" ? setMainNav : setSubNav;
      dispatch(method(nav));
    },
    [type, dispatch]
  );

  return { nav, setNav };
}
