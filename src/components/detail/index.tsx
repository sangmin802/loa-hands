import React, { cloneElement } from "react";
import _ from "utility/utility";
import "./index.scss";
import Thumbnail from "components/thumbnail/index";
import ItemPartBox from "components/itempartbox/index";
import IndentString from "components/indentstring/index";
import TripodSkillCustom from "components/tripodskillcustom/index";
import TextContainer from "components/text-container/index";

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
    <div className="detail zDetail10">
      <div className="detailTop">
        <Thumbnail backSrc={backSrc} src={src} grade={grade}>
          <TextContainer text={[...subTitle, title]} grade={grade} />
        </Thumbnail>
      </div>
      {children && cloneElement(children, { data })}
      <div className="detailBottom">
        {itemPartBox && <ItemPartBox data={itemPartBox} />}
        {indentStringGroup && <IndentString data={indentStringGroup} />}
        {tripodSkillCustom && <TripodSkillCustom data={tripodSkillCustom} />}
      </div>
    </div>
  );
};

export default React.memo(Detail, (left, right) => _.compareObj(left, right));
