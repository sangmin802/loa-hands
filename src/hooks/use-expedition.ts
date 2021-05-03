import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expeditionPopToggle } from "store/ducks/toggle-slicer";
import { RootState } from "store/index";
import Lodash from "lodash";

export function useExpedition() {
  const dispatch = useDispatch();
  const expeditionPop = useSelector(
    (state: RootState) => state.toggleReducer.expeditionPop,
    (left, right) => Lodash.isEqual(left, right)
  );

  const setExpeditionPop = useCallback(() => {
    dispatch(expeditionPopToggle());
  }, [dispatch]);

  return { expeditionPop, setExpeditionPop };
}
