import React, { ReactElement, useMemo } from "react";
import DetailContent from "components/detail-content";
import DoubleListContainer from "components/double-list-container";
import ListItem from "components/list-item";
import Rune from "components/rune";

interface ISkillContainer {
  userData: {
    skillInfo: {
      battleSkill;
      lifeSkill;
    };
  };
  subNav: number;
  setDialog(T: ReactElement): void;
}

const SkillContainer = ({ userData, subNav, setDialog }: ISkillContainer) => {
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
