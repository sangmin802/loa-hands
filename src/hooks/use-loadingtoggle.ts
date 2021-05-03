import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingToggle } from "store/ducks/toggle-slicer";
import { RootState } from "store/index";
import Lodash from "lodash";

export function useLoadingToggle() {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootState) => state.toggleReducer.isLoading,
    (left, right) => Lodash.isEqual(left, right)
  );

  const setisLoading = useCallback(() => {
    dispatch(loadingToggle());
  }, [dispatch]);

  return { isLoading, setisLoading };
}
