import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { expeditionPopToggle } from "store/ducks/toggleSlicer";
import { RootState } from "store/index";
import _ from "utility";

const ExpeditionPopHooks = () => {
  const dispatch = useDispatch();
  const expeditionPop = useSelector(
    (state: RootState) => state.toggleReducer.expeditionPop,
    (left, right) => _.compareObj(left, right)
  );

  const setExpeditionPop = useCallback(() => {
    dispatch(expeditionPopToggle());
  }, []);

  return { expeditionPop, setExpeditionPop };
};

export default ExpeditionPopHooks;
