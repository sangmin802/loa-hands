import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserData_Saga_Async } from "store/ducks/ajax-slicer";
import { RootState } from "store/index";
import Lodash from "lodash";

export function useUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userData = useSelector(
    (state: RootState) => state.ajaxReducer.userData,
    (left, right) => Lodash.isEqual(left, right)
  );

  const setUserData = useCallback(
    name => {
      dispatch(getUserData_Saga_Async(name, history));
    },
    [history, dispatch]
  );

  const infos = useMemo(() => {
    if (!userData) return;

    const {
      characteristicInfo,
      equipInfo: { equipment, avatar },
    } = userData.abilityInfo;
    const { battleSkill, lifeSkill } = userData.skillInfo;
    const { collectionDetail } = userData.collectionInfo;
    const { battle, basic, engrave } = characteristicInfo;

    return {
      equipment,
      avatar,
      battleSkill,
      lifeSkill,
      collectionDetail,
      battle,
      basic,
      engrave,
    };
  }, [userData]);

  return { userData, setUserData, infos };
}
