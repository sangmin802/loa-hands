import React from "react";
import Lodash from "lodash";
import Thumbnail from "components/thumbnail/index";
import DangerousHTML from "components/dangerous-html/index";
import Image from "components/image/index";
import "./index.scss";

const Index = ({ data }) => {
  return (
    <div className="tripodSkillCustoms">
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

export default React.memo(Index, (left, right) => Lodash.isEqual(left, right));