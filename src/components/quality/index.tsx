import React from "react";
import "./index.scss";

const Quality = ({ data }: { data? }) => {
  const { quality } = data.detail;

  if (quality === -1) return null;

  let qualityColor = -2;
  if (quality >= 0 && quality < 10) qualityColor = -1;
  if (quality >= 10 && quality < 70) qualityColor = 1;
  if (quality >= 70 && quality < 90) qualityColor = 2;
  if (quality >= 90) qualityColor = 3;
  if (quality === 100) qualityColor = 4;

  return (
    <div className="detail-quality text-center">
      품질 {quality}%
      <div
        className={`quality-value gradient${qualityColor}`}
        style={{ width: `${quality}%` }}
      ></div>
    </div>
  );
};

export default Quality;
