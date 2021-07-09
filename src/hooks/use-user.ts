import { useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getUserData } from "api/api";

export function useUser(name) {
  const queryClient = useQueryClient();
  const key = useMemo(() => ["userData", name], [name]);

  const { data: userData } = useQuery(
    key,
    async () => {
      queryClient.prefetchQuery(key, () => {
        getUserData(name);
      });

      return getUserData(name);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const infos = useMemo(() => {
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
