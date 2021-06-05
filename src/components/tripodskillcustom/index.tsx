import React from "react";
import Lodash from "lodash";
import { Thumbnail, DangerousHTML, Image } from "../";
import "./index.scss";

const TripodSkillCustom = ({ data }) => {
  return (
    <div className="tripod-skill-customs">
      {data.map((ts, index) => {
        const { name = null, desc = null, grade = null, src = null } = ts;
        return (
          <Thumbnail key={`ts${index}`}>
            <Image args={{ src, className: `gradient${grade}` }} />
            <div className="desc">
              <DangerousHTML html={name} />
              <DangerousHTML html={desc} />
            </div>
          </Thumbnail>
        );
      })}
    </div>
  );
};

export default React.memo(TripodSkillCustom, (left, right) =>
  Lodash.isEqual(left, right)
);
