import React, { useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import Dialog from "./dialog/dialog";
import Text from "components/text";
import * as Styled from "./index.style";

function ExpeditionDialog({ userData, setDialog, ...props }) {
  const history = useHistory();

  const handleSearchUser = useCallback(
    name => {
      history.push(`/userInfo/${name}`);
    },
    [history]
  );

  const dialog = useMemo(
    () => (
      <Dialog
        userData={userData}
        setUserData={handleSearchUser}
        setDialog={setDialog}
      />
    ),
    [userData, handleSearchUser]
  );

  const handleDialog = useCallback(() => {
    setDialog(dialog);
  }, [dialog]);

  return (
    <Styled.ExpeditionButton onClick={handleDialog} {...props}>
      <Text>원정대</Text>
    </Styled.ExpeditionButton>
  );
}

export default React.memo(ExpeditionDialog);
