import React, { PropsWithChildren } from "react";
import { VisibleContainer, DoubleListContainer, ListItem } from "components/";

interface IUserData {
  collectionInfo;
}

interface ICollectionContainer<T> {
  userData: T;
  subNav: number;
}

const CollectionContainer = ({
  userData,
  subNav,
}: PropsWithChildren<ICollectionContainer<IUserData>>) => {
  const { collectionDetail } = userData.collectionInfo;

  return (
    <VisibleContainer selected={subNav}>
      {collectionDetail.map((res, index) => (
        <DoubleListContainer key={index} data={res.collection} divideType="get">
          <ListItem />
        </DoubleListContainer>
      ))}
    </VisibleContainer>
  );
};

export default CollectionContainer;
