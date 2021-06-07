import React, { cloneElement } from "react";
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

  return (
    <div className="detail">
      <Styled.Top>
        <Styled.Container>
          <Image src={src ?? backSrc} grade={grade} />
          <Styled.Desc>
            {subTitle.map(res => (
              <Text type="subTitle" key={res}>
                {res}
              </Text>
            ))}
            <Text type="title" grade={grade}>
              {title}
            </Text>
          </Styled.Desc>
        </Styled.Container>
      </Styled.Top>
      {children && cloneElement(children, { data })}
      <>
        <ItemPartBox data={itemPartBox} />
        <IndentString data={indentStringGroup} />
        <TripodSkillCustom data={tripodSkillCustom} />
      </>
    </div>
  );
};

export default React.memo(Detail, (left, right) => Lodash.isEqual(left, right));
