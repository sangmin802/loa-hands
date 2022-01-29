import React from "react";
import { useCancelQuery } from "hooks/useCancelQuery";
import ErrorFallback from "components/common/errorFallback/errorFallback";
import AsyncBoundary from "components/common/asyncBoundary/asyncBoundary";
import UserInfo from "pages/userInfo/userInfo";
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
      <UserInfo name={name} />
    </AsyncBoundary>
  );
}

export default React.memo(FetchUserInfo);
