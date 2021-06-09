import React from "react";
import Lodash from "lodash";
import { DangerousHTML, Image } from "../";
import * as Styled from "./index.style";

const TripodSkillCustom = ({ data }) => {
  return (
    <>
      {data.map((ts, index) => {
        const { name = null, desc = null, grade = null, src = null } = ts;
        return (
          <Styled.Content key={`ts${index}`} src={src}>
            <Image src={src} color={`gradient${grade}`} />
            <>
              <Styled.TextContainer type="title" src={src}>
                <DangerousHTML html={name} />
              </Styled.TextContainer>
              <Styled.TextContainer type="desc" src={src}>
                <DangerousHTML html={desc} />
              </Styled.TextContainer>
            </>
          </Styled.Content>
        );
      })}
    </>
  );
};

export default React.memo(TripodSkillCustom, (left, right) =>
  Lodash.isEqual(left, right)
);
