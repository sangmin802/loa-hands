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
          <Styled.Content key={`ts${index}`}>
            <Image src={src} color={`gradient${grade}`} />
            <>
              <DangerousHTML html={name} />
              <DangerousHTML html={desc} />
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
