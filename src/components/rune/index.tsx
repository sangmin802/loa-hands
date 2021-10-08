import React from "react";
import Text from "components/text";
import * as Styled from "./index.style";

interface IRune {
  data?: {
    detail: {
      rune: {
        runeGrade: string;
        runeImg: string;
        runeInfo: string;
      };
    };
  };
}

const Rune = ({ data }: IRune) => {
  const rune = data.detail.rune;

  if (!rune) return null;

  const { runeGrade, runeImg, runeInfo } = rune;

  let gradeColor = 0;
  if (runeGrade.includes("고급")) gradeColor = 1;
  if (runeGrade.includes("희귀")) gradeColor = 2;
  if (runeGrade.includes("영웅")) gradeColor = 3;
  if (runeGrade.includes("전설")) gradeColor = 4;
  if (runeGrade.includes("유물")) gradeColor = 5;

  return (
    <Styled.Rune role="rune-grade" data-grade={gradeColor}>
      <Styled.Thumbnail src={runeImg} color={`gradient${gradeColor}`} />
      <Styled.Desc>
        <Text color={`color${gradeColor}`}>{runeGrade}</Text>
        <Styled.RuneText type="desc">{runeInfo}</Styled.RuneText>
      </Styled.Desc>
    </Styled.Rune>
  );
};

export default React.memo(Rune);
