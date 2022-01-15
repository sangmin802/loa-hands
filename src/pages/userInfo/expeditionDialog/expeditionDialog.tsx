import React, { useCallback, useContext } from "react";
import { useHistory } from "react-router";
// import { DialogContext } from "components/dialogProvider/dialogProvider";
import { ModalContext } from "components/modal/modal";
import Dialog from "./dialog/dialog";
import Text from "components/common/text/text";
import * as Styled from "./expeditionDialog.style";
import UserInfo from "models/userInfo";

interface ExpeditionDialogProps {
  userData: UserInfo;
}

function ExpeditionDialog({ userData, ...props }: ExpeditionDialogProps) {
  const history = useHistory();
  const setModal = useContext(ModalContext);

  const handleSearchUser = useCallback(
    name => {
      const path = `/userInfo/${name}`;
      const curPath = history.location.pathname;
      path !== curPath && history.push(path);
    },
    [history]
  );

  const handleDialog = useCallback(() => {
    setModal?.({
      type: "EXPEDITION",
      data: userData,
    });
  }, [userData, setModal, handleSearchUser]);
  // const handleDialog = useCallback(() => {
  //   setDialog?.(
  //     <Dialog
  //       userData={userData}
  //       setUserData={handleSearchUser}
  //       setDialog={setDialog}
  //     />
  //   );
  // }, [userData, setDialog, handleSearchUser]);

  return (
    <Styled.ExpeditionButton onClick={handleDialog} {...props}>
      <Text>원정대</Text>
    </Styled.ExpeditionButton>
  );
}

export default React.memo(ExpeditionDialog);
