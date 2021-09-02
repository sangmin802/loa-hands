import React, { PropsWithChildren, ReactElement, useMemo } from "react";
import {
  DoubleListContainer,
  ListItem,
  DetailContent,
  Rune,
} from "components/";

interface IUserData {
  skillInfo: {
    battleSkill;
    lifeSkill;
  };
}

interface ISkillContainer<T> {
  userData: T;
  subNav: number;
  setDialog(T: ReactElement): void;
}

const SkillContainer = ({
  userData,
  subNav,
  setDialog,
}: PropsWithChildren<ISkillContainer<IUserData>>) => {
  const { battleSkill = null, lifeSkill } = userData.skillInfo;

  const memoized = useMemo(() => {
    return [
      <DoubleListContainer
        lt={`사용 : ${battleSkill.usePoint}`}
        rt={`총 : ${battleSkill.getPoint}`}
        data={battleSkill.skills}
        divideType="leftSkill"
      >
        <ListItem setDialog={setDialog}>
          <DetailContent>
            <Rune />
          </DetailContent>
        </ListItem>
      </DoubleListContainer>,
      <DoubleListContainer data={lifeSkill} divideType="leftSkill">
        <ListItem />
      </DoubleListContainer>,
    ];
  }, [userData]);

  return <>{memoized[subNav]}</>;
};

export default React.memo(SkillContainer);
