import React, { useCallback } from "react";
import Server from "./server/server";
import Text from "components/common/text/text";
import List from "components/common/list/list";
import * as Styled from "./expedition.style";
import { useHistory } from "react-router-dom";
import ExpeditionInfo from "models/expeditionInfo";

export interface DialogProps {
  data: ExpeditionInfo;
  closeModal: () => void;
}

function Dialog({ data, closeModal }: DialogProps) {
  const {
    expeditionInfo: { expeditionUserWrap },
  } = data;
  const history = useHistory();

  const handleSearchUser = useCallback(
    name => {
      const path = `/userInfo/${name}`;
      const curPath = history.location.pathname;
      path !== curPath && history.push(path);
    },
    [history]
  );

  const handleExpedition = useCallback(
    e => {
      const type = e.target.dataset;
      if (type.close) return closeModal();

      if (type.name) {
        (async function () {
          closeModal();
        })().then(() => {
          handleSearchUser(type.name);
        });
      }
    },
    [closeModal, handleSearchUser]
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
