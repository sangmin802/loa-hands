import React, { useMemo } from "react";
import { useUserCollection } from "hooks/useUserCollection";
import { reducePerType } from "utils/util";
import { useNavigation } from "hooks/useNavigation";
import InfoItem from "pages/userInfo/infoItem/infoItem";
import FlexHalf from "components/flexHalf/flexHalf";
import List from "components/list/list";
import * as Styled from "./userCollection.style";

interface UserCollectionProps {
  member: string[];
  queryKey: string;
}

const navList = ["", "", "", "", "", "", "", ""];

function UserCollection({ queryKey, member }: UserCollectionProps) {
  const userCollection = useUserCollection(queryKey, member);
  const arr = useMemo(
    () =>
      userCollection.collectionDetail.map(data => reducePerType(data, "get")),
    [userCollection]
  );

  const { nav, handleNavDelegation } = useNavigation();

  // mini={userCollection.collectionMini[i]}
  return (
    <>
      <Styled.Navigation onClick={handleNavDelegation}>
        {navList.map((name, i) => (
          <Styled.NavButton key={i} data-id={i} selected={nav === i}>
            {name}
          </Styled.NavButton>
        ))}
      </Styled.Navigation>
      <Styled.NAVContent>
        {arr.map((data, i) =>
          i === nav ? (
            <FlexHalf
              left={<List data={data[0]} item={InfoItem} />}
              right={<List data={data[1]} item={InfoItem} />}
              key={i}
            />
          ) : null
        )}
      </Styled.NAVContent>
    </>
  );
}

export default React.memo(UserCollection);
