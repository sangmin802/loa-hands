import React from 'react';
import _ from '../../../Utility.js';

function UserItemHover({
  partImg, 
  detail, 
  pos, 
  type,
  ItemPartBox,
  IntentString,
  SingleTextBox
}){
  if(!detail) return null;

  const {ItemTitle0, NameTagBox0, equipGroupType} = detail;
  const {value : {slotData : {iconPath, iconGrade}}} = ItemTitle0;
  const [equipGrade,,tier, qualityValue] = _.multipleValues(ItemTitle0.value);
  const dataArray = Object.values(detail);
  const qualityColor = setQualityColor(qualityValue);

  return(
    <div className={`listDetail hoverContent zIndex10 ${pos} listDetail${type}`}>
      <div className="listDetailTop">
        <div className="listDetailImg">
          <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
          <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
        </div>
        <div className="listDetailMainInfo">
          <div className={`listDetailName overflowDot color${iconGrade} rem11`}>
            {_.getOnlyText(NameTagBox0.value)}
          </div>
          <div className={`listDetailGrade overflowDot color${iconGrade} rem1`}>
            {equipGrade}
          </div>
          <div className='listDetailTier overflowDot rem09'>
            {tier}
          </div>
          <CreateQualityGraph 
            qualityColor={qualityColor} 
            qualityValue={qualityValue} 
            equipGroupType={equipGroupType}
          />
        </div>
      </div>
      <div className="listDetailBottom">
        <ItemPartBox arr={_.getSameTypeObj(dataArray, "ItemPartBox")}/>
        {equipGroupType !== "Stone" &&
          <IntentString 
            arr={_.getSameTypeObj(dataArray, "IntentStringGroup")}
          />
        }
        <SingleTextBox arr={_.getSameTypeObj(dataArray, "SingleTextBox")}/>
        <TripodContents 
          equipTripod={_.getSameTypeObj(dataArray, "TripodSkillCustom")}
          equipGroupType={equipGroupType}
        />
      </div>
    </div>
  )
}

function setQualityColor(qualityValue){
  if(qualityValue >= 0 && qualityValue < 10) return -1
  if(qualityValue >= 10 && qualityValue < 70) return 1;
  if(qualityValue >= 70 && qualityValue < 90) return 2;
  if(qualityValue >= 90) return 3;
  return -2;
}

function CreateQualityGraph(qualityColor, qualityValue, equipGroupType){
  if(equipGroupType==='Stone') return null;
  return (
    <div className='listDetailQuality'>
      <div className={`qualityValue gradient${qualityColor}`} style={{width : `${qualityValue}%`}}/>
    </div>
  )
}

function TripodContents({equipTripod, equipGroupType}){
  if(equipGroupType==="Acc") return null;
  if(!equipTripod) return null;
  if(!equipTripod.value) return null;
  const tripodValues = Object.values(equipTripod.value);
  return (
    <>
      {
        tripodValues.map((res, index) => {
          const {desc} = res;
          const bool = desc !== '보석 장착 필요';
          return (
            <div className="tripodSkillCustom"  key={`equipTripod${res.name}${index}`}>
              <div
                className="GemImg"
                style={bool ? {border : '1px solid #999'} : null}
              >
                {bool ? <img className={`gradient${res.iconGrade} imgWidth`} src={`//cdn-lostark.game.onstove.com/${res.iconPath}`} alt="보석"/> : null}
              </div>
              <div className="GemInfo">
                <div 
                  className={`
                  GemName 
                  overflowDot 
                  rem09 
                  ${bool ? `color${res.iconGrade}` : ''}
                  `}
                >
                  {bool ? _.getOnlyText(res.name) : desc}
                </div>
                <div className="GemStat rem08 overflowDot">
                  {bool ? desc : null}
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  ) 
}
export default UserItemHover;