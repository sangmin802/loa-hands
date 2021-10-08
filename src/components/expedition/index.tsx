import React, { ReactElement, useCallback } from "react";
import Server from "./server/index";
import Text from "components/text";
import MapContainer from "components/map-container";
import * as Styled from "./index.style";

interface IUserData {
  expeditionInfo: { expeditionUserWrap: any[] };
}

interface IUserExpedition<T> {
  setDialog: (T: ReactElement) => void;
  setUserData: (T: string) => void;
  userData: T;
}

const UserExpedition = ({
  userData,
  setUserData,
  setDialog,
}: IUserExpedition<IUserData>) => {
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
      <MapContainer data={expeditionUserWrap}>
        <Server />
      </MapContainer>
    </Styled.Container>
  );
};

export default React.memo(UserExpedition);
