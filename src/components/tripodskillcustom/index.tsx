import React from "react";
import * as Styled from "./index.style";

interface ITripodSkillCustom {
  data?: {
    name: null | string;
    desc: null | string;
    grade: null | string;
    src: null | string;
  };
}

const TripodSkillCustom = ({ data }: ITripodSkillCustom) => {
  const { name = null, desc = null, grade = null, src = null } = data;

  return (
    <Styled.TripodSkillCustom src={src}>
      <Styled.Thunbnail src={src} color={`gradient${grade}`} />
      <>
        <Styled.HTMLWrapper type="title" src={src} html={name} />
        <Styled.HTMLWrapper type="desc" src={src} html={desc} />
      </>
    </Styled.TripodSkillCustom>
  );
};

export default React.memo(TripodSkillCustom);
