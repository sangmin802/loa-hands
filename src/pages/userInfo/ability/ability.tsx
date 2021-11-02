import React, { useMemo } from "react";
import { reducePerType } from "utils/util";
import { useNavigation } from "hooks/useNavigation";
import InfoItem from "pages/userInfo/infoItem/infoItem";
import Characteristic from "./characteristic/characteristic";
import FlexHalf from "components/flexHalf/flexHalf";
import List from "components/list/list";
import HTMLItem from "../htmlItem/htmlItem";
import UserInfo from "models/userInfo";
import * as Styled from "./ability.style";

interface AbilityProps<T> {
  userData: T;
}

const navList = ["착용 아이템", "착용 아바타", "각인·특성", "보석"];

function Ability({ userData }: AbilityProps<UserInfo>) {
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
            left={<List data={equipLeft} item={InfoItem} />}
            right={<List data={equipRight} item={InfoItem} />}
          />
        )}
        {nav === 1 && (
          <FlexHalf
            left={<List data={avatarLeft} item={InfoItem} />}
            right={<List data={avatarRight} item={InfoItem} />}
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
            left={<List data={gemLeft} item={InfoItem} />}
            right={<List data={gemRight} item={InfoItem} />}
          />
        )}
      </Styled.NAVContent>
    </>
  );
}

export default React.memo(Ability);
