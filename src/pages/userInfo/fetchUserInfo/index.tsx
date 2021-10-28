import { useMemo } from "react";
import { useCancelQuery } from "hooks/use-cancel-query";
import ErrorFallback from "components/errorFallback";
import ErrorBoundary from "components/errorBoundary";
import UserInfo from "pages/userInfo/userInfo";
import Dialog from "components/dialog/index";

interface IFetchUserInfo {
  match?: {
    params: {
      name: string;
    };
  };
}

const FetchUserInfo = ({
  match: {
    params: { name },
  },
}: IFetchUserInfo) => {
  const [userKey, userCollectionKey] = useMemo(
    () => [
      ["userInfo", name],
      ["userCollection", name],
    ],
    [name]
  );

  useCancelQuery([userCollectionKey]);

  return (
    <ErrorBoundary errorFallback={<ErrorFallback />} keys={name}>
      <Dialog rerender={userKey}>
        <UserInfo userKey={userKey} userCollectionKey={userCollectionKey} />
      </Dialog>
    </ErrorBoundary>
  );
};

export default FetchUserInfo;
