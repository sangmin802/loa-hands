import React from "react";
import Lodash from "lodash";
import Thumbnail from "components/thumbnail/index";
import TextContainer from "components/text-container/index";

const Index = ({ data }) => {
  return (
    <div className="tripodSkillCustoms">
      {data.map((ts, index) => {
        const { name = null, desc = null, grade = null, src = null } = ts;
        return (
          <Thumbnail key={`ts${index}`} backSrc={src} grade={grade}>
            <TextContainer text={[name, desc]} grade={grade} />
          </Thumbnail>
        );
      })}
    </div>
  );
};

export default React.memo(Index, (left, right) => Lodash.isEqual(left, right));
