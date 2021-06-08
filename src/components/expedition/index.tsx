import React from "react";
import Lodash from "lodash";
import ExpeditionServer from "./server/index";
import { Button, Text } from "components/";
import * as Styled from "./index.style";

const UserExpedition = ({
  userData,
  setUserData,
  expeditionPop,
  toggleExpedition,
}) => {
  const {
    expeditionInfo: { expeditionUserWrap },
  } = userData;

  return (
    <Styled.Container isShow={expeditionPop}>
      <Styled.ButtonContainer>
        <Button onClick={toggleExpedition}>
          <Text>닫기</Text>
        </Button>
      </Styled.ButtonContainer>
      {expeditionUserWrap.map((wrap, index) => {
        return (
          <ExpeditionServer
            key={`userExpedition${index}`}
            wrap={wrap}
            setUserData={setUserData}
          />
        );
      })}
    </Styled.Container>
  );
};

export default React.memo(UserExpedition, (left, right) =>
  Lodash.isEqual(left, right)
);
