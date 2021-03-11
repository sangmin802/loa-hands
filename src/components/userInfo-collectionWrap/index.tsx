import React from "react";
import _ from "utility";
import "./index.css";
import DoubleColumnWrap from "components/_doubleColumnWrap/index";

const Index = ({ collectionInfo }) => {
  const { collectionDetail } = collectionInfo;

  return (
    <div className="collectionWrap">
      {collectionDetail.map((res, index) => (
        <DoubleColumnWrap
          key={index}
          data={res.collection}
          type="True"
          lt={res.title}
          rt={`획득 : ${res.getCount} 미획득 : ${res.totalCount}`}
        />
      ))}
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
