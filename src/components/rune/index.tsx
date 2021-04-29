import React from "react";
import "./index.scss";
import Thumbnail from "components/thumbnail/index";
import TextContainer from "components/text-container/index";

export default ({ data }: { data? }) => {
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
    <div className="rune">
      <Thumbnail backSrc={runeImg} grade={gradeColor}>
        <TextContainer text={[runeGrade, runeInfo]} grade={gradeColor} />
      </Thumbnail>
    </div>
  );
};
