import React from "react";
import { useCancelQuery } from "hooks/useCancelQuery";
import { useParams } from "react-router-dom";

import ErrorFallback from "components/common/errorFallback/errorFallback";
import AsyncBoundary from "components/common/asyncBoundary/asyncBoundary";
import UserInfo from "pages/userInfo/userInfo";
import SearchLoading from "../searchLoading/searchLoading";

function FetchUserInfo() {
  const { name } = useParams();
  useCancelQuery([`userInfo-${name}`, `userCollection-${name}`]);

  return (
    <AsyncBoundary
      errorFallback={ErrorFallback}
      suspenseFallback={<SearchLoading />}
      keys={name}
    >
      <UserInfo name={name as string} />
    </AsyncBoundary>
  );
}

export default React.memo(FetchUserInfo);
