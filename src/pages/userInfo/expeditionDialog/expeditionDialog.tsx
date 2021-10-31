import React, { useCallback, useContext } from "react";
import { useHistory } from "react-router";
import { DialogContext } from "components/dialogProvider/dialogProvider";
import Dialog from "./dialog/dialog";
import Text from "components/text/text";
import * as Styled from "./expeditionDialog.style";
import UserInfo from "models/userInfo";

interface ExpeditionDialogProps {
  userData: UserInfo;
}

function ExpeditionDialog({ userData, ...props }: ExpeditionDialogProps) {
  const history = useHistory();
  const setDialog = useContext(DialogContext);

  const handleSearchUser = useCallback(name => {
    history.push(`/userInfo/${name}`);
  }, []);

  const handleDialog = useCallback(() => {
    setDialog?.(
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
