import React, { ReactElement, useMemo } from "react";
import { reducePerType } from "utils/util";
import { useNavigation } from "hooks/use-navigation";
import InfoItem from "pages/userInfo/infoItem";
import Characteristic from "./characteristic/characteristic";
import FlexHalf from "components/flexHalf/flexHalf";
import List from "components/list/list";
import HTMLItem from "../htmlItem/htmlItem";
import * as Styled from "./ability.style";

interface IUserData {
  abilityInfo: {
    characteristicInfo: { battle; basic; engrave };
    equipInfo: { equipment; avatar; badge; gem };
    engrave;
  };
}

interface IAbilityContainer<T> {
  userData: T;
  setDialog(T: ReactElement): void;
}

const navList = ["착용 아이템", "착용 아바타", "각인·특성", "보석"];

const AbilityContainer = ({
  userData,
  setDialog,
}: IAbilityContainer<IUserData>) => {
  const [
    [equipLeft, equipRight],
    [avatarLeft, avatarRight],
    [buff, debuff],
    [basic, battle],
    [gemLeft, gemRight],
  ] = useMemo(() => {
    const {
      characteristicInfo,
      equipInfo: { equipment, avatar, gem },
      engrave,
    } = userData.abilityInfo;
    const { battle, basic } = characteristicInfo;
    const sortedEngrave = [...engrave.values()]
      .filter(e => e.size >= 5)
      .sort((a, b) => {
        if (a.size > b.size) return -1;
        return 0;
      });

    return [
      reducePerType(Object.values(equipment), "equip"),
      reducePerType(Object.values(avatar), "inner"),
      reducePerType(sortedEngrave, "buff"),
      [battle, basic],
      reducePerType(Object.values(gem)),
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
              <List data={equipLeft} item={InfoItem} dispatcher={setDialog} />
            }
            right={
              <List data={equipRight} item={InfoItem} dispatcher={setDialog} />
            }
          />
        )}
        {nav === 1 && (
          <FlexHalf
            left={
              <List data={avatarLeft} item={InfoItem} dispatcher={setDialog} />
            }
            right={
              <List data={avatarRight} item={InfoItem} dispatcher={setDialog} />
            }
          />
        )}
        {nav === 2 && (
          <>
            <FlexHalf
              left={<List data={buff} item={HTMLItem} />}
              right={<List data={debuff} item={HTMLItem} />}
            />
            <List data={[basic, battle]} item={Characteristic} />
          </>
        )}
        {nav === 3 && (
          <FlexHalf
            left={
              <List data={gemLeft} item={InfoItem} dispatcher={setDialog} />
            }
            right={
              <List data={gemRight} item={InfoItem} dispatcher={setDialog} />
            }
          />
        )}
      </Styled.NAVContent>
    </>
  );
};

export default React.memo(AbilityContainer);
