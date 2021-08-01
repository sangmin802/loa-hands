import React, { PropsWithChildren, ReactElement } from "react";
import {
  VisibleContainer,
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

  return (
    <VisibleContainer selected={subNav}>
      <DoubleListContainer data={battleSkill.skills} divideType="leftSkill">
        <ListItem setDialog={setDialog}>
          <DetailContent>
            <Rune />
          </DetailContent>
        </ListItem>
      </DoubleListContainer>
      <DoubleListContainer data={lifeSkill} divideType="leftSkill">
        <ListItem />
      </DoubleListContainer>
    </VisibleContainer>
  );
};

export default SkillContainer;
