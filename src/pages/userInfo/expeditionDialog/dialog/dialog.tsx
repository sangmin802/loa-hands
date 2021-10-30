import React, { ReactElement, useCallback } from "react";
import Server from "../server/server";
import Text from "components/text/text";
import List from "components/list/list";
import * as Styled from "./dialog.style";

export interface DialogProps<T> {
  setDialog: (T: ReactElement | null) => void;
  setUserData: (T: string) => void;
  userData: T;
}

function Dialog({
  userData,
  setUserData,
  setDialog,
}: DialogProps<{
  expeditionInfo: { expeditionUserWrap: any[] };
}>) {
  const {
    expeditionInfo: { expeditionUserWrap },
  } = userData;

  const handleExpedition = useCallback(
    e => {
      const type = e.target.dataset;

      if (type.close) return setDialog(null);
      if (type.name) return setUserData(type.name);
    },
    [setDialog, setUserData]
  );

  return (
    <Styled.Container onClick={handleExpedition}>
      <Styled.CloseButton>
        <Text data-close>닫기</Text>
      </Styled.CloseButton>
      <List data={expeditionUserWrap} item={Server} />
    </Styled.Container>
  );
}

export default React.memo(Dialog);
