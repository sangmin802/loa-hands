import React, { ReactElement, useMemo } from "react";
import { reducePerType } from "utils/util";
import { useNavigation } from "hooks/use-navigation";
import InfoItem from "pages/userInfo/infoItem/infoItem";
import List from "components/list/list";
import FlexHalf from "components/flexHalf/flexHalf";
import UserInfo from "models/userInfo";
import * as Styled from "./skill.style";

interface SkillProps {
  userData: UserInfo;
  setDialog(T: ReactElement): void;
}

const navList = ["전투스킬", "생활스킬"];

function Skill({ userData, setDialog }: SkillProps) {
  const [[skillLeft, skillRight], [lifeLeft, lifeRight]] = useMemo(() => {
    const { battleSkill, lifeSkill } = userData.skillInfo;

    return [
      reducePerType(battleSkill.skills, "leftSkill"),
      reducePerType(lifeSkill, "leftSkill"),
    ];
  }, [userData]);

  const { nav, handleNavDelegation } = useNavigation();

  return (
    <>
      <Styled.Navigation onClick={handleNavDelegation}>
        {navList.map((name, i) => (
          <Styled.NavButton selected={nav === i} data-id={i} key={i}>
            {name}
          </Styled.NavButton>
        ))}
      </Styled.Navigation>
      <Styled.NAVContent>
        {nav === 0 && (
          <FlexHalf
            left={
              <List data={skillLeft} item={InfoItem} dispatcher={setDialog} />
            }
            right={
              <List data={skillRight} item={InfoItem} dispatcher={setDialog} />
            }
          />
        )}
        {nav === 1 && (
          <FlexHalf
            left={
              <List data={lifeLeft} item={InfoItem} dispatcher={setDialog} />
            }
            right={
              <List data={lifeRight} item={InfoItem} dispatcher={setDialog} />
            }
          />
        )}
      </Styled.NAVContent>
    </>
  );
}

export default React.memo(Skill);
