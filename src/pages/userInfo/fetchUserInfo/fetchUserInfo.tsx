import React from "react";
import { useCancelQuery } from "hooks/useCancelQuery";
import ErrorFallback from "components/errorFallback/errorFallback";
import ErrorBoundary from "components/errorBoundary/errorBoundary";
import AsyncBoundary from "components/asyncBoundary/asyncBoundary";
import UserInfo from "pages/userInfo/userInfo";
import Dialog from "components/dialogProvider/dialogProvider";
import SearchLoading from "../searchLoading/searchLoading";

interface FetchUserInfoProps {
  match: {
    params: {
      name: string;
    };
  };
}

function FetchUserInfo({
  match: {
    params: { name },
  },
}: FetchUserInfoProps) {
  useCancelQuery([`userInfo-${name}`, `userCollection-${name}`]);

  return (
    <AsyncBoundary
      errorFallback={ErrorFallback}
      suspenseFallback={<SearchLoading />}
      keys={name}
    >
      <Dialog rerender={name}>
        <UserInfo name={name} />
      </Dialog>
    </AsyncBoundary>
    // <ErrorBoundary errorFallback={ErrorFallback} keys={name}>
    //   <Dialog rerender={userKey}>
    //     <UserInfo userKey={userKey} userCollectionKey={userCollectionKey} />
    //   </Dialog>
    // </ErrorBoundary>
  );
}

export default React.memo(FetchUserInfo);
