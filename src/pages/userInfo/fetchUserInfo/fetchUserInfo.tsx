import { useMemo } from "react";
import { useCancelQuery } from "hooks/useCancelQuery";
import ErrorFallback from "components/errorFallback/errorFallback";
import ErrorBoundary from "components/errorBoundary/errorBoundary";
import UserInfo from "pages/userInfo/userInfo";
import Dialog from "components/dialogProvider/dialogProvider";

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
  const [userKey, userCollectionKey] = useMemo(
    () => [
      ["userInfo", name],
      ["userCollection", name],
    ],
    [name]
  );

  useCancelQuery([userCollectionKey]);

  return (
    <ErrorBoundary errorFallback={ErrorFallback} keys={name}>
      <Dialog rerender={userKey}>
        <UserInfo userKey={userKey} userCollectionKey={userCollectionKey} />
      </Dialog>
    </ErrorBoundary>
  );
}

export default FetchUserInfo;
