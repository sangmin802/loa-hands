import React, { cloneElement } from "react";
import Lodash from "lodash";
import "./index.scss";
import {
  Thumbnail,
  ItemPartBox,
  IndentString,
  TripodSkillCustom,
  TextContainer,
  Image,
} from "../";

const Detail = ({ data, children }: { data; children? }) => {
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
      <div className="detail-top">
        <Thumbnail>
          <Image
            args={{
              className: `gradient${grade ?? ""}`,
              style: { backgroundImage: backSrc ?? "" },
              src: src ?? backSrc,
            }}
          />
          <TextContainer text={[...subTitle, title]} grade={grade} />
        </Thumbnail>
      </div>
      {children && cloneElement(children, { data })}
      <div className="detail-bottom">
        <ItemPartBox data={itemPartBox} />
        <IndentString data={indentStringGroup} />
        <TripodSkillCustom data={tripodSkillCustom} />
      </div>
    </div>
  );
};

export default React.memo(Detail, (left, right) => Lodash.isEqual(left, right));
