import React, { cloneElement } from "react";
import Lodash from "lodash";
import "./index.scss";
import Thumbnail from "components/thumbnail/index";
import ItemPartBox from "components/itempartbox/index";
import IndentString from "components/indentstring/index";
import TripodSkillCustom from "components/tripodskillcustom/index";
import TextContainer from "components/text-container/index";
import Image from "components/image/index";

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
      <div className="detailBottom">
        {itemPartBox && <ItemPartBox data={itemPartBox} />}
        {indentStringGroup && <IndentString data={indentStringGroup} />}
        {tripodSkillCustom && <TripodSkillCustom data={tripodSkillCustom} />}
      </div>
    </div>
  );
};

export default React.memo(Detail, (left, right) => Lodash.isEqual(left, right));
