import React, { cloneElement, useMemo } from "react";
import Lodash from "lodash";
import { ItemPartBox, IndentString, TripodSkillCustom, Image, Text } from "../";
import * as Styled from "./index.style";

const Detail = ({ data, children }: { data?; children? }) => {
  const { backSrc, detail } = data;
  const {
    src,
    grade,
    title,
    subTitle,
    itemPartBox,
    indentStringGroup,
    tripodSkillCustom,
  } = detail;

  const titleColor = useMemo(
    () => (grade ? `color${grade}` : "white"),
    [grade]
  );

  return (
    <>
      <Styled.Top>
        <Styled.Container>
          <Image src={src ?? backSrc} color={`gradient${grade}`} />
          <Styled.Desc>
            {subTitle.map(res => (
              <Text type="subTitle" key={res}>
                {res}
              </Text>
            ))}
            <Text type="title" color={titleColor}>
              {title}
            </Text>
          </Styled.Desc>
        </Styled.Container>
      </Styled.Top>
      {children && cloneElement(children, { data })}
      <>
        {itemPartBox && <ItemPartBox data={itemPartBox} />}
        {indentStringGroup && <IndentString data={indentStringGroup} />}
        {tripodSkillCustom && <TripodSkillCustom data={tripodSkillCustom} />}
      </>
    </>
  );
};

export default React.memo(Detail, (left, right) => Lodash.isEqual(left, right));
