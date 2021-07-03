import { useMemo } from "react";
import { useQuery } from "react-query";
import API from "api/api";

export function useUser(name) {
  const { data: userData } = useQuery(
    ["userInfo", name],
    () => API.getUserData(name),
    { suspense: true }
  );

  const infos = useMemo(() => {
    if (!userData) return;

    const {
      characteristicInfo,
      equipInfo: { equipment, avatar },
    } = userData.abilityInfo;
    const { battleSkill = null, lifeSkill } = userData.skillInfo;
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

  return { userData, infos };
}
