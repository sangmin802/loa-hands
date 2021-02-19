import React from 'react';
import _ from 'utility';

const Index = ({
  partImg, 
  detail, 
  children
}) => {
  if(!detail) return null;

  const {ItemTitle0, NameTagBox0} = detail;
  const {value : {slotData : {iconPath, iconGrade}}} = ItemTitle0;
  const [equipGrade,,tier] = _.multipleValues(ItemTitle0.value);

  return(
    <div className={`listDetail hoverContent zIndex10`}>
      <div className="listDetailTop">
        <div className="listDetailImg">
          <div className="listDetailImgs">
            <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
            <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
          </div>
        </div>
        <div className="listDetailMainInfo">
          <div className={`listDetailName overflowDot color${iconGrade}bold rem1`}>
            {_.getOnlyText(NameTagBox0.value)}
          </div>
          <div className={`listDetailGrade overflowDot color${iconGrade}bold rem09`}>
            {equipGrade}
          </div>
          <div className='listDetailTier overflowDot rem09'>
            {tier}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Index;