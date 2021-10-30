import React, { ReactElement, useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import Dialog from "./dialog/dialog";
import Text from "components/text/text";
import * as Styled from "./expeditionDialog.style";
import UserInfo from "models/userInfo";

interface ExpeditionDialogProps {
  userData: UserInfo;
  setDialog: (T: ReactElement | null) => void;
}

function ExpeditionDialog({
  userData,
  setDialog,
  ...props
}: ExpeditionDialogProps) {
  const history = useHistory();

  const handleSearchUser = useCallback(name => {
    history.push(`/userInfo/${name}`);
  }, []);

  const handleDialog = useCallback(() => {
    setDialog(
      <Dialog
        userData={userData}
        setUserData={handleSearchUser}
        setDialog={setDialog}
      />
    );
  }, [userData, setDialog]);

  return (
    <Styled.ExpeditionButton onClick={handleDialog} {...props}>
      <Text>원정대</Text>
    </Styled.ExpeditionButton>
  );
}

export default React.memo(ExpeditionDialog);
